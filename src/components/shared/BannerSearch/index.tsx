import React from 'react';

import { Container } from 'styles/Grid';
import * as Styled from './styles';
import InputSearch from '../InputSearch';

const BannerSearch = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <div className="search__content">
          <h1>Como podemos ajudá-lo?</h1>
          <InputSearch />
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default BannerSearch;
