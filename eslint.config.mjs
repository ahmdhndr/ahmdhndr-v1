import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";
import checkfile from "eslint-plugin-check-file";
import n from "eslint-plugin-n";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  js.configs.recommended,
  nextVitals,
  prettier,
  {
    plugins: {
      checkfile,
      n,
    },
    rules: {
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      semi: ["error"],
      quotes: ["error", "double"],
      "n/no-process-env": "error",
      "checkfile/filename-naming-convention": [
        "error",
        { "**/*.{ts,tsx}": "KEBAB_CASE" },
        { ignoreMiddleExtensions: true },
      ],
      "checkfile/folder-naming-convention": [
        "error",
        { "src/**/!(__tests__|^[.*)": "KEBAB_CASE" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]);

export default eslintConfig;
