import { css } from '../../style/stitches.config';

export const IconWrapper = css({
  display: 'flex',
  backgroundColor: '$bgalt',
  padding: '8px',
  margin: '0 8px 0 0',
  borderRadius: '5px',

  '& svg': {
    fontSize: '1.5rem',
    fill: '#ddd',
    transition: 'all .2s ease',
  },

  '&:hover svg': {
    fill: '$secondary',
  },
});
