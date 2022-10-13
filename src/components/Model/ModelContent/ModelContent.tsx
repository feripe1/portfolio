import React from 'react';
import { styled } from '../../../style/stitches.config';

import { ModelContent as ModelContentCSS } from './style';

const StyledModelContent = styled('section', ModelContentCSS);

type ModelContentProps = React.ComponentProps<typeof StyledModelContent>;

export const ModelContent = ({ children, ...props }: ModelContentProps) => {
  return <StyledModelContent {...props}>{children}</StyledModelContent>;
};
