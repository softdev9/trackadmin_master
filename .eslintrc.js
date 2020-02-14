module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "react-app",
    'plugin:react/recommended',
    "prettier", 
    "prettier/react",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js",".jsx"] }],
    "no-useless-escape": "off",
    "no-script-url": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-template-curly-in-string": "off",
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
    "linebreak-style": 0,
    "react/jsx-wrap-multilines": 0,
    "react/no-danger": 0,
    "react/forbid-prop-types": 0,
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "import/no-unresolved": 0,
    "no-console": 0,
    "indent": ["error", 2, {"ignoredNodes": ["JSXElement"]}],
    "react/jsx-indent": ["error", 2],
    "indent": [2, 2],
    "indent": 2,
    "indent": [2, 2, {"VariableDeclarator": 1}],
  },
};
