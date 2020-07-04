const error = {
  error: '#c92a2a', // #e03131
  error50: '#ff6b6b',
};

const light = {
  primary0: '#f8f9fa',
  primary1: '#f1f3f5',
  primary2: '#e9ecef',
  primary3: '#dee2e6',
  primary4: '#ced4da',
  primary5: '#adb5bd',
  primary6: '#868e96',
  primary7: '#495057',
  primary8: '#343a40',
  primary9: '#212529',
  ...error,
};

const dark = {
  ...light,
  // primary0: '#212529',
  // primary1: '#343a40',
  // primary2: '#495057',
  // primary3: '#868e96',
  // primary5: '#ced4da',
  // primary6: '#dee2e6',
  // primary7: '#e9ecef',
  // primary4: '#adb5bd',
  // primary8: '#f1f3f5',
  // primary9: '#f8f9fa',
};

export { light, dark };
