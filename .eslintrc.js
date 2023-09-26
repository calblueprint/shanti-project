module.exports = {
    extends: ["@calblueprint/eslint-config-react", "eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    rules: {
      // Add any custom rules here
      // Disable the rule that requires React to be in scope -- we don't need this with React 18
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  };