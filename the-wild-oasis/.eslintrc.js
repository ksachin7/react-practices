module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['react', 'react-hooks', 'styled-components-a11y', 'prettier'],
    extends: ['plugin:styled-components-a11y/recommended', 'wesbos', 'prettier'],
    rules: {
        // Add custom rules here
        "styled-components-a11y/rule-name": 1,
        //   "no-console": 2,
        // "no-unused-vars": 1
    },
};
