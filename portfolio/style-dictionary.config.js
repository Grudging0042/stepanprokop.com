import StyleDictionary from 'style-dictionary';
import chroma from 'chroma-js';

// Custom preprocessor to handle Figma Tokens Studio format
const figmaPreprocessor = {
  name: 'figma-tokens-preprocessor',
  preprocessor: (dictionary) => {
    // Process all tokens to handle Figma's $value and $type format
    const processToken = (token) => {
      if (token.$value !== undefined) {
        token.value = token.$value;
      }
      if (token.$type !== undefined) {
        token.type = token.$type;
      }
      // Process nested tokens
      Object.keys(token).forEach(key => {
        if (typeof token[key] === 'object' && !Array.isArray(token[key]) && token[key] !== null) {
          processToken(token[key]);
        }
      });
      return token;
    };
    
    Object.keys(dictionary).forEach(key => {
      if (typeof dictionary[key] === 'object') {
        processToken(dictionary[key]);
      }
    });
    
    return dictionary;
  }
};

export default {
  log: {
    warnings: 'warn',
    verbosity: 'verbose',
  },
  preprocessors: [figmaPreprocessor],
  source: [
    'design-tokens/00--color-tokens.mode.tokens.json',
    'design-tokens/00--number-tokens.mode.tokens.json',
    'design-tokens/01--comp-colors.day_mode.tokens.json',
    'design-tokens/01--comp-colors.night_mode.tokens.json',
    'design-tokens/01--comp-sizes.desktop.tokens.json',
    'design-tokens/01--comp-sizes.mobile.tokens.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'types/',
      files: [
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
  },
};
