import { styled } from './style/stitches.config';

export const AboutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '16px',
  gap: '16px',

  '@dsk2': {
    flexDirection: 'row',
    gap: '48px',
  },
});

export const MeImg = styled('img', {
  height: '120px',
  borderRadius: '50%',
  border: '3px solid',
  borderColor: '$bgalt',
  margin: '8px',

  '@dsk2': {
    height: '240px',
    margin: '24px',
  },
});
