import Link from 'next/link';
import React from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './style';

const BoxHelp = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <Link href="/ticket">
          <div className="box__help">
            <a className="link__help">
              <span>
                <img src="/images/booking.svg" alt="icone bilhete" />
              </span>
              <h2>Bilhete</h2>
              <p>Como cancelar e modificar a tua reserva</p>
            </a>
          </div>
        </Link>
        <Link href="/children">
          <div className="box__help">
            <a className="link__help">
              <span>
                <img src="/images/icons/baby-boy.png" alt="icone criança" />
              </span>
              <h2>Crianças</h2>
              <p>Tudo o que deverias saber quando viajas com crianças</p>
            </a>
          </div>
        </Link>
        <Link href="/luggage">
          <div className="box__help">
            <a className="link__help">
              <span>
                <img src="/images/icons/bagagem.png" alt="icone bagagem" />
              </span>
              <h2>Bagagem</h2>
              <p>O que podes levar e quanto custa</p>
            </a>
          </div>
        </Link>
        <Link href="/covid19">
          <div className="box__help">
            <a className="link__help">
              <span>
                <img src="/images/icons/MedicalMask.png" alt="icone máscara" />
              </span>
              <h2>Covid</h2>
              <p>
                Informações a respeito da epidemia de coronavirus (COVID-19)
              </p>
            </a>
          </div>
        </Link>
      </Styled.Wrapper>
    </Container>
  );
};

export default BoxHelp;
