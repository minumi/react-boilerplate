import { useState } from 'react';

type TMode = 'dark' | 'light';

export const useTheme = () => {
  const isBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  let initTheme: TMode = isBrowserDarkMode ? 'dark' : 'light';

  const localSettingTheme = localStorage.getItem('theme');

  if (localSettingTheme) {
    initTheme = localSettingTheme as TMode;
  }

  const [theme, setTheme] = useState(initTheme);

  const setMode = (mode: TMode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => setMode(theme === 'light' ? 'dark' : 'light');

  return [theme, toggleTheme];
};
