import React from 'react';
import { styled } from '../../../style/stitches.config';

import { ProjectList as ProjectListCSS } from './style';

const StyledProjectList = styled('ul', ProjectListCSS);

type StyledProjectProps = React.ComponentProps<typeof StyledProjectList>;

export const ProjectList = ({ children }: StyledProjectProps) => {
  return <StyledProjectList>{children}</StyledProjectList>;
};
