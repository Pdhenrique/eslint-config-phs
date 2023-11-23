module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    'plugin:prettier/recommended',
    "prettier"
  ],
  "root": true,
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "eslint-plugin-import-helpers",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
    "prettier",
    "testing-library"
  ],
  "rules": {
    'prettier/prettier': ["error", {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': false,
      'trailingComma': 'all',
      'arrowParens': 'always',
      'semi': false,
      'endOfLine': 'auto',
    }],
    "no-shadow": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "{}": false,
          "object": false
        }
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "default-param-last": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "/^react$/",
          "/react/",
          "module",
          "/@xstyled/",
          "/@lara/lib-components/",
          "/@lara/lib-hooks/",
          "/@lara/lib-i18n/",
          "/@lara/lib-icons/",
          "/@lara/lib-themes/",
          "/elements/",
          "/atoms/",
          "/molecules/",
          "/organisms/",
          "/mocks/",
          "/types/",
          "/.storybook/",
          "/i18n/",
          "/^\\.\\//",
          "/^\\.+/"
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "error",
    "import/prefer-default-export": "off",
    "no-restricted-exports": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"] }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-unstable-nested-components": ["error", { "allowAsProps": true }],
    "react/prop-types": "off",
    "react/function-component-definition": "off",
    "react-hooks/exhaustive-deps": "off"
  },
  "overrides": [
    {
      "files": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
      ],
      "extends": ["plugin:testing-library/react"]
    }
  ],
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": ["tsconfig.json", "libs/*/tsconfig.json"]
      },
      "node": {
        "project": ["tsconfig.json", "libs/*/tsconfig.json"]
      }
    },
    "mdx/code-blocks": true,
    "react": {
      "version": "detect"
    }
  }
};
