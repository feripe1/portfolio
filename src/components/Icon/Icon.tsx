import React from 'react';
import { styled } from '../../style/stitches.config';
import { IconType } from 'react-icons';

import { IconWrapper as IconWrapperCSS } from './style';

const StyledIconWrapper = styled('a', IconWrapperCSS);

interface IconWrapperProps extends React.ComponentProps<typeof StyledIconWrapper> {
  IconSrc: IconType;
}

export const Icon = ({ IconSrc, ...props }: IconWrapperProps) => {
  return (
    <StyledIconWrapper {...props}>
      <IconSrc />
    </StyledIconWrapper>
  );
};
