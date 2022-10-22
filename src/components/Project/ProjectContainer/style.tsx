import { css } from '../../../style/stitches.config';

export const Wrapper = css({
  minWidth: '100%',
  minHeight: 'calc(100vh - 240px)',
  padding: '1.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  listStyle: 'none',
  scrollSnapAlign: 'start',
  scrollSnapStop: 'always',
});

export const Container = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',

  '@dsk2': {
    width: '60%',
  },
});

export const Img = css({
  margin: '16px',
  width: '280px',
  height: 'auto',

  '@dsk2': {
    width: '560px',
  },
});
