import { styled } from '../../style/stitches.config';

export const Title = styled('p', {
  fontWeight: 700,
  marginBottom: '8px',

  variants: {
    size: {
      smallest: {
        fontSize: '20px',
      },
      small: {
        fontSize: '24px',
      },
      normal: {
        fontSize: '32px',
      },
      big: {
        fontSize: '48px',
      },
      biggest: {
        fontSize: '64px',
      },
    },
    color: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
    },
    border: {
      true: {
        borderBottom: '1px solid',
        borderBottomColor: '$secondary',
        paddingBottom: '6px',
      },
    },
  },

  defaultVariants: {
    size: 'normal',
    color: 'primary',
  },
});

export const Text = styled('p', {
  fontWeight: 400,
  color: '$secondary',
  fontSize: '16px',
  lineHeight: '1.25rem',
});
