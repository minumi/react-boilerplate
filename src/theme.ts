const error = {
  error: '#c92a2a', // #e03131
  errorLight: '#ff6b6b',
};

const light = {
  background: '#f8f9fa',
  disabled: '#dee2e6',
  border: '#adb5bd',
  light: '#868e96',
  color: '#343a40',
  dark: '#212529',
  ...error,
};

const dark = {
  ...light,
};

export { light, dark };
