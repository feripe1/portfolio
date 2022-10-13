import { styled } from './style/stitches.config';

export const AboutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '16px',
  gap: '32px',

  '@dsk2': {
    flexDirection: 'row',
  },
});

export const MeImg = styled('img', {
  height: '200px',
  borderRadius: '50%',
  border: '3px solid',
  borderColor: '$bgalt',
  margin: '24px',

  '@dsk2': {
    height: '240px',
  },
});
