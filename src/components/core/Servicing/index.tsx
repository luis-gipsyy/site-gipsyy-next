import React from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './styles';

const Servicing = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <h1>Serviços</h1>
        <div className="servicing__content">
          <div className="box__servicing">
            <img
              src="/images/shipping/transfer.png"
              alt="imagem transporte regular"
            />
            <p>Transporte Regular e Ocasional</p>
          </div>
          <div className="box__servicing">
            <img
              src="/images/shipping/transporte-escolar.png"
              alt="imagem transporte escolar"
            />
            <p>Transporte Escolar e Empresarial</p>
          </div>
          <div className="box__servicing">
            <img
              src="/images/shipping/turismo-excursao.svg"
              alt="imagem transporte regular"
            />
            <p>Turismo e Excursões</p>
          </div>
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default Servicing;
