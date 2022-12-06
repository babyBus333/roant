module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  ignorePatterns: ['dist/**', 'docSrc/**', 'docs/**'],
  rules: {
    semi: 'off',
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'prefer-regex-literals': 'off',
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unused-vars': 'error', // 解决ts函数类型定义未使用报错
    'no-unused-expressions': [2, { allowShortCircuit: true }], // 支持简写表达式 a && b()
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
