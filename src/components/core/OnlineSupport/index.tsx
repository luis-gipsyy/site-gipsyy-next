import Link from 'next/link';
import React from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './style';

const OnlineSupport = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <div className="content">
          <div className="content__support">
            <div className="content__support--title">
              <img src="/images/icons/chat.svg" alt="icone chat" />
              <p>Suporte Online</p>
            </div>

            <p>24 horas por dia, 7 dias na semana.</p>
          </div>
          <div className="content__whatsapp">
            <h2>Conversar por texto</h2>
            <p>Entre em contato conosco pelo nosso Whatsapp</p>
            <Link href="https://api.whatsapp.com/send/?phone=556121067154&text&type=phone_number&app_absent=0">
              <a target="_blank" className="support__btn">
                <img src="/images/icons/whatsapp.svg" alt="icone whatsapp" />
                Acessar Whatsapp
              </a>
            </Link>
          </div>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default OnlineSupport;
