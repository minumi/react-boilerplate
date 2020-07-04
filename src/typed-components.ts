import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface IThemeInterface {
  background: string;
  disabled: string;
  border: string;
  light: string;
  color: string;
  dark: string;
  error: string;
  errorLight: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
