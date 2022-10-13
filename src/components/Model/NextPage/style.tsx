import { css } from '../../../style/stitches.config';

export const NextPage = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  position: 'absolute',
  bottom: '120px',
  padding: '8px 16px',
  border: '1px solid $secondary',
  backgroundColor: '$bgalt',
  color: '$secondary',
  borderRadius: '8px',
  cursor: 'pointer',

  '@dsk2': {
    bottom: '100px',
  },

  '&:hover': {
    backgroundColor: '$bgalthover',
  },
});
