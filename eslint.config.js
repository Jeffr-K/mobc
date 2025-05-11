// eslint.config.js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import a11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/setupProxy.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
      "no-undef": "off",
    },
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "jsx-a11y": a11yPlugin,
      import: importPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": { typescript: {} },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": "error",
      // simple-import-sort 경고 끄기
      "simple-import-sort/imports": "off", // 'error'에서 'off'로 변경
      "simple-import-sort/exports": "off", // 'error'에서 'off'로 변경
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      // no-empty-pattern 경고 끄기
      "no-empty-pattern": "off", // 추가
      "@typescript-eslint/no-empty-pattern": "off", // 추가
      "prettier/prettier": [
        "error",
        {
          semi: true,
          trailingComma: "all",
          singleQuote: false,
          printWidth: 140,
          tabWidth: 2,
          endOfLine: "auto",
          arrowParens: "avoid",
          bracketSpacing: true,
          importDeclaration: "auto",
          importAttributes: "indent",
          importOrderSeparation: true,
          importOrderSortSpecifiers: true,
        },
      ],
    },
  },
];
