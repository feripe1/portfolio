import React from 'react';
import { styled } from '../../../style/stitches.config';
import { Title, Text, Icon } from '../../';
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

import { Wrapper as WrapperCSS, Container as ContainerCSS, Img as ImgCSS } from './style';

const StyledWrapper = styled('li', WrapperCSS);
const StyledContainer = styled('div', ContainerCSS);
const StyledImg = styled('img', ImgCSS);

interface ProjectContainerProps extends React.ComponentProps<typeof StyledWrapper> {
  title: string;
  subtitle: string;
  img: string;
  github: string;
  demo: string;
}

export const ProjectContainer = ({
  title,
  subtitle,
  img,
  github,
  demo,
  ...props
}: ProjectContainerProps) => {
  return (
    <StyledWrapper {...props}>
      <StyledContainer>
        <Title size={'small'}>{title}</Title>
        <StyledImg src={img} />
        <Text>{subtitle}</Text>
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          <Icon IconSrc={FaExternalLinkSquareAlt} href={demo} target="_blank"></Icon>
          <Icon IconSrc={FaGithub} href={github} target="_blank"></Icon>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};
