import React, { forwardRef } from 'react';
import { styled } from '../../../style/stitches.config';

import { ModelWrapper as ModelWrapperCSS } from './style';

const StyledModelWrapper = styled('main', ModelWrapperCSS);

type ModelWrapperProps = React.ComponentProps<typeof StyledModelWrapper>;

export const ModelWrapper = forwardRef<HTMLDivElement, ModelWrapperProps>(
  ({ children }, ref) => {
    return <StyledModelWrapper ref={ref}>{children}</StyledModelWrapper>;
  }
);

ModelWrapper.displayName = 'ModalWrapper';
