import React from 'react';
import {
  TransportContainer,
  BannerHero,
  SectionContent,
  Servicing,
} from 'components/core';
import Base from 'templates/Base';
import RequestQuote from 'components/shared/RequestQuote';

const Shipping = () => {
  return (
    <>
      <Base title="Gipsyy - Fretamento" backgroundColor="secondary">
        <BannerHero
          image="/images/shipping/banner-shipping.svg"
          justify="flex-start"
          height="260px"
          fontSize="6rem"
          weight="bold"
          color="#0B4178"
        >
          <h1>Fretamento</h1>
        </BannerHero>
        <SectionContent
          image={
            <img
              src="/images/shipping/svgexport-9.svg"
              alt="Imagem onibus sobre nós"
            />
          }
          flexDirection="row-reverse"
          textSize="small"
        >
          <p>
            Alugue ônibus para realizar passeios culturais, viagens turísticas,
            transporte dos seus funcionários e prestadores de serviço,
            transporte escolar ou transfers. A GIPSYY, especializada no
            transporte coletivo de pessoas, conta com{' '}
            <b>
              profissionais qualificados e treinados, segurança, conforto,
              serviços dedicados à sua necessidade e preços competitivos.
            </b>
          </p>
        </SectionContent>
        <Servicing />
        <TransportContainer />
        <RequestQuote />
      </Base>
    </>
  );
};

export default Shipping;
