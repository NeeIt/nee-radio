module.exports = {
  root: true,
  ignorePatterns: [
    'projects/**/*'
  ],
  overrides: [
    {
      files: [
        '*.ts'
      ],
      parserOptions: {
        project: [
          'tsconfig.json'
        ],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        createDefaultProgram: true
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        // Настройки для Prettier (Обязательно в конце)
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      rules: {
        '@angular-eslint/directive-selector': [ 'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase'
          }
        ],
        '@angular-eslint/component-selector': [ 'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case'
          }
        ],
        // My rules
        'constructor-super': 'warn',
        'getter-return': 'error',
        'no-debugger': 'warn',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'warn',
        'no-empty-character-class': 'warn',
        'no-empty-pattern': 'error',
        'no-ex-assign': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        'no-prototype-builtins': 'off',
        'no-fallthrough': 'warn',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'warn',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'warn',
        'no-loss-of-precision': 'warn',
        'no-obj-calls': 'error',
        'no-promise-executor-return': 'warn',
        'no-setter-return': 'error',
        'no-this-before-super': 'warn',
        'eqeqeq': 'warn',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sparse-arrays': 'warn',
        'no-template-curly-in-string': 'warn',
        'no-unreachable': 'warn',
        'no-unreachable-loop': 'warn',
        'no-unsafe-finally': 'error',
        'no-unused-vars': ["warn", {
          "vars": "all",
          "args": "none",
          "ignoreRestSiblings": false
          }
        ],
        'no-use-before-define': 'error',
        'use-isnan': 'warn',
        'valid-typeof': 'error',
        // formating
        'array-bracket-spacing': 'error',
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': ['error', {
          after: true
        }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'dot-location': ['error', 'property'],
        'func-call-spacing': ['error', 'never'],
        'key-spacing': ['error', {
          afterColon: true
          }],
        'keyword-spacing': ['error', {
          before: true,
          after: true,
        }],
        'max-len': ['warn', {
          code: 120,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreTrailingComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }],
        'multiline-ternary': ['error', 'always'],
        'new-parens': ['error', 'always'],
        'newline-per-chained-call': ['error', {
          ignoreChainWithDepth: 3
        }],
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['error', {
          max: 2,
          maxEOF: 0,
          maxBOF: 1
        }],
        'no-tabs': ['warn', {
          allowIndentationTabs: true,
        }],
        'no-trailing-spaces': 'error',
        'object-curly-newline': ['error', {
          multiline: true
        }],
        'object-curly-spacing': ['error', 'never'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
          'error',
          { blankLine: "always", prev: ["case", "default"], next: "*" },
          { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
          { blankLine: "always", prev: "*", next: "return" }
          ],
        'rest-spread-spacing': ['error', 'never'],
        'semi': ['error', 'always'],
        'semi-spacing': 'error',
        'semi-style': ['error', 'last'],
        'space-before-blocks': ['error', 'never'],
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'switch-colon-spacing': 'error',
        '@angular-eslint/directive-selector': 'warn'
      }
    },
    {
      files: [
        '*.html'
      ],
      extends: [
        'plugin:@angular-eslint/template/recommended'
      ],
      rules: {}
    }
  ]
}
