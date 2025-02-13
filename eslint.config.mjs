import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          prefix: ["I"],
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
          suffix: ["Type"],
        },
      ],

      "tailwindcss/classnames-order": "warn",

      "max-params": ["error", 10],

      "react/display-name": "error",
      "react/prop-types": "off",
    },
    extends: ["plugin:tailwindcss/recommended"],
    plugins: ["@typescript-eslint", "tailwindcss"],
  },
];

export default eslintConfig;
