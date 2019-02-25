module.exports = {
  root: true,

  env: {
    node: true,
  },

  parser: '@typescript-eslint/parser',

  extends: [
    '@vue/standard',
    '@vue/typescript',
  ],

  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
