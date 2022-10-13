import React from 'react';
import { styled } from '../../../style/stitches.config';
import { Title, Text } from '../../';

import { Container as ContainerCSS, Img as ImgCSS } from './style';

const StyledContainer = styled('li', ContainerCSS);
const StyledImg = styled('img', ImgCSS);

interface ProjectContainerProps extends React.ComponentProps<typeof StyledContainer> {
  title: string;
  subtitle: string;
  img?: string;
}

export const ProjectContainer = ({
  title,
  subtitle,
  img,
  ...props
}: ProjectContainerProps) => {
  return (
    <StyledContainer {...props}>
      <div>
        <Title size={'smallest'}>{title}</Title>
        <Text>{subtitle}</Text>
      </div>
      <StyledImg src={img} />
    </StyledContainer>
  );
};
