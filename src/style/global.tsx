import { globalCss } from './stitches.config';

export const global = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html, body': {
    fontFamily: 'Raleway',
  },

  a: {
    cursor: 'pointer',
    textDecoration: 'none',
  },

  '::-webkit-scrollbar': {
    width: '3px',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: '$bgalthover',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$primary',
  },
});
