import React, { useState, useEffect } from 'react';
import { styled } from '../../style/stitches.config';
import {
  Container as ContainerCSS,
  Header as HeaderCSS,
  Nav as NavCSS,
  Ul as UlCSS,
  Title as TitleCSS,
  Button as ButtonCSS,
} from './style';

const StyledHeader = styled('header', HeaderCSS);
const StyledNav = styled('nav', NavCSS);
const StyledUl = styled('ul', UlCSS);
const StyledTitle = styled('a', TitleCSS);
const StyledButton = styled('button', ButtonCSS);
const Container = styled('div', ContainerCSS);

interface HeaderProps extends React.ComponentProps<typeof StyledHeader> {
  modelRef: React.RefObject<HTMLDivElement | null>;
}

export const Header = ({ modelRef, ...props }: HeaderProps) => {
  const [transparent, setTransparent] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (modelRef.current) {
      const updateTransparent = () => {
        if (modelRef.current) {
          modelRef.current.scrollTop > 180 ? setTransparent(true) : setTransparent(false);
        }
      };
      const updateActive = () => {
        if (modelRef.current) {
          modelRef.current?.scrollWidth > 768 && setActive(false);
        }
      };

      modelRef.current.addEventListener('scroll', updateTransparent);
      window.addEventListener('resize', updateActive);

      return () => {
        modelRef.current?.removeEventListener('scroll', updateTransparent);
        window.addEventListener('resize', updateActive);
      };
    }
  }, [modelRef]);

  return (
    <>
      <StyledHeader
        {...props}
        css={{
          ...(transparent && { backgroundColor: 'transparent', boxShadow: 'none' }),
          ...(active && { backgroundColor: 'inset' }),
        }}
      >
        <Container>
          <div>
            <StyledTitle href="#home"> Felipe Brito</StyledTitle>
          </div>

          <StyledNav css={{ ...(active && { display: 'flex' }) }}>
            <StyledUl
              css={{
                ...(active && {
                  flexDirection: 'column',
                  position: 'absolute',
                  right: 0,
                  top: '74px',
                  backgroundColor: '$header',
                }),
              }}
            >
              <li>
                <StyledTitle href="#home">Início</StyledTitle>
              </li>
              <li>
                <StyledTitle href="#about">Sobre mim</StyledTitle>
              </li>
              <li>
                <StyledTitle href="#projects">Projetos</StyledTitle>
              </li>
            </StyledUl>
          </StyledNav>

          <StyledButton onClick={() => setActive((e) => !e)}>
            <svg viewBox="-15 0 80 30" width="40" height="40">
              <rect width="80" height="6" fill="var(--colors-secondary)"></rect>
              <rect y="16" width="80" height="6" fill="var(--colors-secondary)"></rect>
              <rect y="32" width="80" height="6" fill="var(--colors-secondary)"></rect>
            </svg>
          </StyledButton>
        </Container>
      </StyledHeader>
      {active && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(0, 0, 0 , .4)',
            zIndex: 999,
          }}
          onClick={() => setActive(false)}
        ></div>
      )}
    </>
  );
};
