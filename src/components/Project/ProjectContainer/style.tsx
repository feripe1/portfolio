import { css } from '../../../style/stitches.config';

export const Container = css({
  width: '240px',
  height: '120px',
  padding: '1.25rem',
  display: 'flex',
  gap: '16px',
  borderRadius: '16px',
  border: '3px solid',
  borderColor: '$bgalt',
  listStyle: 'none',
  justifyContent: 'space-between',
  position: 'relative',

  '@dsk2': {
    height: '300px',
    flexDirection: 'column',
  },
});

export const Img = css({
  '@dsk2': {
    width: '235px',
    height: 'auto',
  },
});
