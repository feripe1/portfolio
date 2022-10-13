import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      bg1: 'rgb(52, 32, 58)',
      bg2: 'rgb(58, 35, 65)',
      bg3: 'rgb(65, 39, 71)',
      bgalt: 'rgb(85, 55, 96)',
      bgalthover: 'rgb(92, 63, 100)',
      header: 'rgb(72, 42, 77)',
      primary: '#a690d9',
      secondary: '#c2a9d1',
    },
    fontSizes: {
      1: '0.625rem',
      2: '0.72rem',
      3: '0.875rem',
      4: '1rem',
      5: '1.125rem',
      6: '1.25rem',
      7: '1.5rem',
      8: '1.75rem',
    },
  },
  media: {
    dsk1: '(min-width: 560px)',
    dsk2: '(min-width: 768px)',
  },

  utils: {
    mx: (value: string) => ({ marginLeft: value, marginRight: value }),
    my: (value: string) => ({ marginTop: value, marginBottom: value }),
    px: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: string) => ({ paddingTop: value, paddingBottom: value }),
  },
});
