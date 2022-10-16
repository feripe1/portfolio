import { css } from '../../../style/stitches.config';

export const Container = css({
  minWidth: '100%',
  minHeight: 'calc(100vh - 240px)',
  padding: '1.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  listStyle: 'none',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
});

export const Img = css({
  '@dsk2': {
    width: '235px',
    height: 'auto',
  },
});
