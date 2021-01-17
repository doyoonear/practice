module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier/vue',
    '@vue/typescript/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    allowImportExportEverywhere: true,
  },
  plugins: ['import', 'vue'],
  rules: {
    'vue/no-v-html': 'off',
    'vue/no-unused-components': 'off',
  },
};
