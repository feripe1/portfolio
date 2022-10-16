import { css } from '../../style/stitches.config';

export const Header = css({
  position: 'fixed',
  width: 'calc(100% - 4px)',
  top: 0,
  backgroundColor: '$header',
  transition: 'all 0.75s',
  display: 'flex',
  justifyContent: 'center',
  padding: '0 2rem',
  zIndex: 9999,
});

export const Container = css({
  width: '1140px',
  display: 'flex',
  justifyContent: 'space-between',
  transition: 'all 0.75s',
});

export const Nav = css({
  display: 'none',
  transition: 'all 0.75s',

  '@dsk2': {
    display: 'flex',
  },
});

export const Ul = css({
  display: 'flex',
  listStyle: 'none',
  paddingLeft: '16px',
  transition: 'all 0.75s',
});

export const Title = css({
  fontSize: '22px',
  display: 'inline-block',
  padding: '24px 0',
  marginRight: '32px',
  color: '$secondary',
  cursor: 'pointer',
  fontWeight: 500,
  transition: 'all .4s',

  '&:hover': {
    color: '$primary',
  },
});

export const Button = css({
  backgroundColor: 'transparent',
  border: 'none',

  '@dsk2': {
    display: 'none',
  },
});
