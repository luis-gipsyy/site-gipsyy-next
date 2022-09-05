import React from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './styles';

const TransportContainer = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <div className="description__container">
          <div>
            <h2>Frota</h2>
            <p>
              Contamos com uma frota moderna e de acordo com todas as normas de
              segurança.
            </p>
            <p>Os veículos contam com comodidades como:</p>
            <ul>
              <li>WC a bordo</li>
              <li>Ar condiconado</li>
              <li>Wi-Fi a bordo</li>
              <li>Cadeiras reclináveis</li>
            </ul>
          </div>
          <div className='logo__transparent'>
            <img
              src="/images/shipping/logo-transparent.svg"
              alt="logo transparente"
            />
          </div>
        </div>
        <div className="transport__container">
          <div className="transport__content">
            <img src="/images/shipping/miniTurismo.svg" alt="imagem van" />
            <button className="transport__btn">Van</button>
          </div>
          <div className="transport__content">
            <img src="/images/shipping/bus_new.svg" alt="imagem ônibus" />
            <button className="transport__btn">Convencional</button>
          </div>
          <div className="transport__content">
            <img
              src="/images/shipping/bus_double.svg"
              alt="imagem ônibus double"
            />
            <button className="transport__btn">Double-decker</button>
          </div>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default TransportContainer;
