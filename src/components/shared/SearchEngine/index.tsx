import React, { ReactElement } from 'react';

import { Input, InputCount, Select, Button, DateInput } from 'components/core';

import * as Styled from './styles';
import { Container } from 'styles/Grid';

const SearchEngine = (): ReactElement => {
  return (
    <Container>
      <Styled.Wrapper>
        <Input
          icon={<img src="/images/icons/Icon_Partid.svg" />}
          name="teste"
          label="Saindo de"
          placeholder="Origem"
        />
        <Select label="Indo para" name="teste" defaultValue="0" />
        <DateInput />
        <InputCount label="Passageiro (s)" />
        <Button label="Buscar passagem" />
      </Styled.Wrapper>
    </Container>
  );
};

export default SearchEngine;
