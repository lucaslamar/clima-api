module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src'],['@root', './']]
      }
  },
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    "no-unused-vars": ["error", {
      "argsIgnorePattern": "_"
    }],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}]
  },
};
