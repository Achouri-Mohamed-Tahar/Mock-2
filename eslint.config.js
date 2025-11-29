import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
];
