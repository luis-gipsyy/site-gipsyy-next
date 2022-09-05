import Link from 'next/link';
import React from 'react';
import * as Styled from './style';

import PaymentMethodsFooter from './PaymentMethodsFooter';
import { Container } from 'styles/Grid';

const Footer = () => {
  return (
    <Styled.Wrapper>
      <PaymentMethodsFooter />
      <Container>
        <div className="content__footer">
          <div className="logo__footer">
            <img
              src="/images/logos/GipsyyBR_logo_rodape1x.png"
              alt="Logo gipsy footer"
            />
          </div>
          <div className="container__infos">
            <div className="box__infos">
              <p>Acesso Rápido</p>
              <Link href="#">
                <a>Comprar passagens de ônibus</a>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=556121067106">
                <a target="_blank">Compre seu bilhete pelo whatsapp</a>
              </Link>
              <Link href="/stops-information">
                <a>Rodoviárias para embarque</a>
              </Link>
              <Link href="/roadmap">
                <a>Principais destinos de ônibus</a>
              </Link>
            </div>
            <div className="box__infos">
              <p>Gipsyy</p>
              <Link href="/about-us">
                <a>Sobre nós</a>
              </Link>
              <Link href="/terms">
                <a>Termos e condições</a>
              </Link>
              <Link href="/privacy-policy">
                <a>Política de Privacidade</a>
              </Link>
              <Link href="https://gipsyy.gupy.io/">
                <a target="_blank">Trabalhe Conosco</a>
              </Link>
            </div>
            <div className="box__infos">
              <p>Ajuda</p>
              <Link href="/help">
                <a>Ajuda</a>
              </Link>
              <Link href="/faqs">
                <a>Perguntas frequentes</a>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=556121067154">
                <a target="_blank">Whatsapp atendimento</a>
              </Link>
              <div className="logo__social">
                <a href="https://www.facebook.com/GipsyyBrasil" target="_blank">
                  <img src="/images/logos/facebook.svg" alt="Logo facebook" />
                </a>
                <a href="https://www.instagram.com/gipsyybr" target="_blank">
                  <img src="/images/logos/instagram.svg" alt="Logo instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer__copyrights">
            <span>©2022 Gipsyy Direitos Reservados</span>
            <p>GOGIPSY DO BRASIL TECNOLOGIA E VIAGENS LTDA</p>
            <span>CNPJ: 37.813.735/0001-44</span>
          </div>
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default Footer;
