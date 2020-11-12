module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 6,
    },
    extends: ['prettier', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {},
}
