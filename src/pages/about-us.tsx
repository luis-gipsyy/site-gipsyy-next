import BannerHero from 'components/core/BannerHero';
import SectionContent from 'components/core/SectionContent';
import React from 'react';
import Base from 'templates/Base';

const AboutUs = () => {
  return (
    <>
      <Base title="Gipsyy - Sobre Nós">
        <BannerHero>
          <h1>Quem somos</h1>
        </BannerHero>
        <SectionContent
          image={
            <img
              src="images/icons/about-us-bus.png"
              alt="Imagem onibus about-us"
            />
          }
          title={'Conheça mais sobre a Gibsyy'}
        >
          <p>
            Gipsyy: inovação, transporte, segurança e respeito pela natureza
            estão no centro das nossas operações.
          </p>
          <p>
            Somos uma plataforma digital que oferece os melhores preços para
            suas viagens de ônibus, reduzindo nossas emissões de CO2 através de
            iniciativas que ajudam a fortalecer o tecido social e ambiental.
          </p>
          <p>
            Conheça os projetos que apoiamos e saiba que se você viaja conosco,
            você já faz parte da revolução verde.
          </p>
        </SectionContent>
        <SectionContent title={'Missão'}>
          <p>
            Nossa missão está alinhada com o que procuram nossos passageiros;
            preços imbatíveis, conforto, inovação e justiça climática.
          </p>
          <p>
            Por que desperdiçar? Estamos ansiosos para o futuro do transporte
            com a idéia de que nenhum assento fique vazio. Assim, damos uma
            segunda vida aos nossos assentos ociosos oferecendo eles para você.
          </p>
          <p>
            Viajar é o que amplia a mente e o que queremos é ampliar a
            experiência dos nossos passageiros com o menor custo possível.
          </p>
        </SectionContent>
        <SectionContent
          image={
            <img
              src="images/icons/no-waste.png"
              alt="Imagem ambiental about-us"
            />
          }
          title={'Visão'}
        >
          <p>
            O que você procura esta procurando você. Da Europa para o Brasil,
            Gipsyy.
          </p>
          <p>
            Estamos a um clique: milhares de cidades, programa de milhagem, sem
            desperdício, reduzindo o carbono no planeta. Nós oferecemos, você
            escolhe.
          </p>
          <p>
            Nossa visão é um futuro onde viajar não tenha impacto no meio
            ambiente.
          </p>
          <p>
            Quando você viaja conosco estamos a cortar as distâncias entre você
            e seus entes queridos, entre você e seus sonhos com um serviço de
            alto nível a um custo baixo. Seja parte de nossa visão! Baixe nosso
            app!
          </p>
        </SectionContent>
      </Base>
    </>
  );
};

export default AboutUs;
