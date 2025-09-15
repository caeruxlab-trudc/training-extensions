module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  globals: {
    '$': 'readonly',
    'jQuery': 'readonly',
    'Splide': 'readonly',
    'gsap': 'readonly'
  },
  rules: {
    // Relax console.log warnings
    'no-console': 'warn',

    // Allow unused vars in some cases
    'no-unused-vars': ['warn', {
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_|^is|^location',
      'ignoreRestSiblings': true
    }]
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'error'
      }
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn', {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_|^is|^location',
          'ignoreRestSiblings': true
        }],
        '@typescript-eslint/no-explicit-any': 'warn'
      }
    },
    {
      files: ['gulpfile.cjs'],
      env: {
        node: true,
        es6: true
      }
    }
  ]
};
