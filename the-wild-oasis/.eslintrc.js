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
    extends: ['plugin:styled-components-a11y/recommended', 'eslint:recommended', 'wesbos', 'plugin:prettier/recommended'],
    rules: {
        // Add custom rules here
        // 'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }], // Allow both single and double quotes
        'react/prop-types': ['error'], // Enforce PropTypes validation for React components
        'react-hooks/rules-of-hooks': ['error'], // Enforce rules of Hooks
        'react-hooks/exhaustive-deps': ['warn'], // Check for missing dependencies in useEffect and useCallback
    },
};
