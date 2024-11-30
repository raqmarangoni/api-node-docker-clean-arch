import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "never"],
      "no-console": "warn",
      "comma-dangle": ["error", "never"],
      "arrow-parens": ["error", "as-needed"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    },
  },
  pluginJs.configs.recommended,
];