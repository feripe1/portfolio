import React, { useRef, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { global } from './style/global';
import {
  Title,
  Text,
  Header,
  ModelWrapper,
  ModelContent,
  NextPage,
  Icon,
  ProjectList,
  ProjectContainer,
} from './components';
import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { AboutContainer, MeImg } from './style';
import meImg from './assets/me.jpg';
import sitePokemon from './assets/sitepokemon.png';
import fasterPokemon from './assets/fasterpokemon.png';

function App() {
  global();
  const ModelWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });

    window.scroll({
      top: 0,
    });

    document.addEventListener(
      'scroll',
      () => {
        const aosAnimation = document.querySelectorAll('[data-aos]');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add('aos-animate');
            }
          });
        });
        aosAnimation.forEach((aosObject) => {
          observer.observe(aosObject);
        });
      },
      { capture: true, passive: true }
    );
  }, []);

  return (
    <>
      <Header modelRef={ModelWrapperRef} />

      <ModelWrapper ref={ModelWrapperRef}>
        <ModelContent css={{ backgroundColor: '$bg1' }} id="home">
          <div style={{ textAlign: 'center' }}>
            <Title
              size={{ '@initial': 'big', '@dsk2': 'biggest' }}
              color={'secondary'}
              data-aos="fade-up"
            >
              Olá, me chamo
            </Title>
            <Title size={{ '@initial': 'big', '@dsk2': 'biggest' }} data-aos="fade-up">
              Felipe Brito
            </Title>
            <Title
              size={{ '@initial': 'small', '@dsk2': 'normal' }}
              color={'secondary'}
              data-aos="fade-up"
            >
              Sou desenvolvedor front-end
            </Title>
          </div>

          <div style={{ display: 'flex', margin: '1.5rem 0 0 0' }} data-aos="fade-up">
            <Icon
              IconSrc={FaLinkedin}
              href="https://www.linkedin.com/in/felipe-brito-da-silva-85057421a/"
              target="_blank"
            />
            <Icon IconSrc={FaGithub} href="https://github.com/feripe1" target="_blank" />
            <Icon IconSrc={FaRegEnvelope} href="mailto:felipebrito2077@gmail.com?" />
          </div>
          <NextPage href="#about" data-aos="fade" data-aos-delay="300" />
        </ModelContent>

        <ModelContent css={{ backgroundColor: '$bg2' }} id="about">
          <Title data-aos="fade-up" size={'big'} data-aos-delay="200">
            Sobre mim
          </Title>

          <MeImg data-aos="fade-up" src={meImg} data-aos-delay="200" />
          <AboutContainer data-aos="fade-up" data-aos-delay="200">
            <div style={{ flex: 1, width: '320px' }}>
              <Title size={'small'} border>
                Informações
              </Title>
              <Text>20 anos</Text>
              <Text>São Paulo - SP</Text>
              <Text>Inglês avançado</Text>
            </div>
            <div style={{ flex: 1 }}>
              <Title size={'small'} border>
                Habilidades
              </Title>
              <Text>HTML, CSS e Javascript</Text>
              <Text>Typescript</Text>
              <Text>React</Text>
              <Text>Node.js</Text>
              <Text>MySQL</Text>
            </div>
          </AboutContainer>
        </ModelContent>

        <ModelContent css={{ backgroundColor: '$bg2' }}>
          <AboutContainer data-aos="fade-up" data-aos-delay="200">
            <div style={{ flex: 1 }}>
              <Title size={'small'} border>
                Formação acadêmica
              </Title>
              <Text style={{ fontWeight: 'bold' }}>
                Instituto Federal de São Paulo - Campus São Paulo
              </Text>
              <Text style={{ fontWeight: 'bold' }}>
                Tec. em Análise e Desenvolvimento de Sistemas
              </Text>
              <Text>Conteúdo abordado até então:</Text>
              <Text> - Lógica de programação - C e Java</Text>
              <Text> - Desenvolvimento web - HTML, CSS e Javascript</Text>
              <Text> - Banco de dados e SGBDs - MySQL e SQL Server</Text>
              <Text> - Redes de computadores</Text>
              <Text>Início em jun/2021 - Finalização em jun/2024</Text>
            </div>

            <div style={{ flex: 1 }}>
              <Title size={'small'} border>
                Cursos realizados
              </Title>
              <Text> - Algoritmos e Lógica de Programação</Text>
              <Text> - Desenvolvimento web completo</Text>
              <Text> - Programação em Python do básico ao avançado</Text>
              <Text> - Java Programação Orientada a Objetos</Text>
            </div>
          </AboutContainer>
        </ModelContent>

        <ModelContent css={{ backgroundColor: '$bg3' }} id="projects">
          <Title size={'big'} data-aos="fade" data-aos-delay="100">
            Projetos
          </Title>
          <ProjectList data-aos="fade">
            <ProjectContainer
              title="Site de Pokemóns"
              img={sitePokemon}
              subtitle="Site para listagem de alguns pokemóns
              com paginação, requisição API com getStaticProps e
              sistema de favoritos com armazenamento em local storage.
              Desenvolvido em Typescript e NextJS com a lib Stitches"
              github="https://github.com/feripe1/sitepokemon"
              demo="https://sitepokemon.vercel.app/"
            />
            <ProjectContainer
              title="Pokemón mais rápido"
              img={fasterPokemon}
              subtitle="Jogo simples onde o usuário adivinha qual o
              pokemón com a maior velocidade base.
              Realizei esse site com intuito de estudar NextJS e TailwindCSS.
              Desenvolvido em Typescript e NextJs."
              github="https://github.com/feripe1/fasterpokemon"
              demo="https://fasterpokemon.vercel.app/"
            />
          </ProjectList>
        </ModelContent>
      </ModelWrapper>
    </>
  );
}

export default App;
