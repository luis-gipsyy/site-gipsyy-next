import React from 'react';
import Slider from 'react-slick';

import IconBarCard from './icon-bar-card';

import { Container } from 'styles/Grid';

const IconBar = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        <IconBarCard>
          <img src="/images/icons/priceBR.svg" alt="imagem preço" />
          <p>Melhores preços</p>
        </IconBarCard>
        <IconBarCard>
          <img src="/images/icons/wifiBR.svg" alt="imagem wifi" />
          <p>Mais seguro</p>
        </IconBarCard>
        <IconBarCard>
          <img src="/images/icons/confortBR.svg" alt="imagem conforto" />
          <p>Mais conforto</p>
        </IconBarCard>
        <IconBarCard>
          <img src="/images/icons/ecoBR.svg" alt="imagem ecologico" />
          <p>Mais cuidado</p>
        </IconBarCard>
      </Slider>
    </Container>
  );
};

export default IconBar;
