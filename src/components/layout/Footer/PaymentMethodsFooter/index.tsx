import React from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './style';

const PaymentMethodsFooter = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <div className="content">
          <div className='box__icons'> 
            <a href="https://www.visa.com" target="_blank">
              <img src="/images/payment_methods/visa.svg" alt="logo visa" />
            </a>
          </div>
          <div className='box__icons'>
            <a href="https://www.mastercard.com" target="_blank">
              <img
                src="/images/payment_methods/mastercard.svg"
                alt="logo mastercard"
              />
            </a>
          </div>
          <div className='box__icons'>
            <a href="https://www.bcb.gov.br" target="_blank">
              <img src="/images/payment_methods/PIX.png" alt="logo pix" />
            </a>
          </div>
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default PaymentMethodsFooter;
