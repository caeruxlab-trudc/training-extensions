module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // Relax import notation for SCSS
    'import-notation': null,

    // Allow custom functions
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'get_pc',
          'get_sp',
          'pc',
          'sp',
          'darken',
          'lighten',
          'rgba',
          'rgb',
          'math.div',
          'color.adjust',
          'color.scale',
        ],
      },
    ],

    // Relax selector patterns for BEM and existing code
    'selector-class-pattern': null,

    // Allow vendor prefixes
    'property-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,

    // Allow descending specificity
    'no-descending-specificity': null,

    // Relax some formatting rules
    'declaration-block-single-line-max-declarations': 3,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'color-hex-case': 'lower',
    'string-quotes': 'single',
    'selector-pseudo-element-colon-notation': 'double',
    'keyframes-name-pattern': null,

    // Allow empty lines
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],

    // Allow shorthand
    'shorthand-property-no-redundant-values': null,

    // Allow whitespace
    'comment-whitespace-inside': null,
  },
  ignoreFiles: ['dist/**/*', 'node_modules/**/*'],
};
