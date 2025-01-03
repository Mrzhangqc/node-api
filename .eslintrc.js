module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: 'airbnb-base',
  rules: {
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    camelcase: 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@models', './src/models'],
          ['@controllers', './src/controllers'],
          ['@utils', './src/utils'],
          ['@config', './src/config'],
        ],
        extensions: ['.js', '.json'],
      },
    },
  },
};
