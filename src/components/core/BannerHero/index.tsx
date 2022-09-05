import React, { ReactElement, ReactNode } from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './style';

interface BannerHeroProps {
  children?: ReactNode;
  image?: string;
  height?: string;
  justify?: string;
  align?: string;
  fontSize?: string;
  color?: string;
  weight?: string;
  insideContainer?: React.ReactNode;
}

const BannerHero = ({
  insideContainer,
  children,
  image,
  height,
  justify,
  align,
  fontSize,
  color,
  weight,
}: BannerHeroProps): ReactElement => {
  return (
    <Styled.Wrapper
      insideContainer={insideContainer}
      image={image}
      height={height}
      justify={justify}
      align={align}
      fontSize={fontSize}
      color={color}
      weight={weight}
    >
      <Container>
        <div className="inside__container">
          {insideContainer && <>{insideContainer}</>}
        </div>
        <div className="banner__content">{children}</div>
      </Container>
    </Styled.Wrapper>
  );
};

export default BannerHero;
