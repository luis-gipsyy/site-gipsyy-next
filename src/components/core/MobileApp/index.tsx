import React from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './style';

const MobileApp = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <img src="/images/banner-phone-pt-br.jpg" alt="imagem smartphone" />

        <div className="box__app">
          <div className="box__app__title">
            <img
              src="/images/logos/square-logo/logoBR.png"
              alt="logo gipsy mobile"
            />
            <h3>Faça download do nosso App</h3>
          </div>
          <div className="box__app__qrcode">
            <div className="box__qrcode">
              <img
                src="/images/logos/app-store/qrBR.png"
                alt="QrCode app-store"
              />
              <a
                href="https://apps.apple.com/br/app/gipsyy-passagens-rodovi%C3%A1rias/id1542453150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/logos/app-store/artboard-4BR.png"
                  alt=" logo app-store"
                />
              </a>
            </div>
            <div className="box__qrcode">
              <img
                src="/images/logos/google-play/qrBR.png"
                alt="QrCode google-play"
              />
              <a
                href="https://play.google.com/store/apps/details?id=br.com.gipsyy.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/logos/google-play/artboard-3BR.png"
                  alt="logo google-play"
                />
              </a>
            </div>
          </div>
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default MobileApp;
