import { css } from '../../../style/stitches.config';

export const ProjectList = css({
  display: 'flex',
  width: '100%',
  marginTop: '16px',
  overflowX: 'scroll',
  margin: '0 auto',
  scrollSnapType: 'x mandatory',

  '@dsk2': {
    width: '66%',
  },
});
