import { ReactElement } from 'react';
import Slider from 'react-slick';

import TopDestinationsItem from 'components/core/TopDestinations/TopDestinationsItem';

import * as Styled from './styles';
import { Container } from 'styles/Grid';

const TopDestinations = (): ReactElement => {
  const isMobile = window.innerWidth < 990;

  const settings = {
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const arrayItems = Array(5).fill(null);

  return (
    <Container>
      <Styled.Wrapper>
        <div className="title">Melhores ofertas em viagem de ônibus</div>

        {isMobile ? (
          <Slider {...settings}>
            {arrayItems.map((_, index) => (
              <TopDestinationsItem key={index} />
            ))}
          </Slider>
        ) : (
          <div className="content">
            {arrayItems.map((_, index) => (
              <TopDestinationsItem key={index} />
            ))}
          </div>
        )}
      </Styled.Wrapper>
    </Container>
  );
};

export default TopDestinations;
