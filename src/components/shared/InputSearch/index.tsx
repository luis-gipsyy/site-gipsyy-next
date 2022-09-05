import React from 'react';
import * as Styled from './styles';

const InputSearch = () => {
  const [search, setSearch] = React.useState('');

  return (
    <Styled.Wrapper>
      <form action="/help">
        <button type="submit">
          <img src="/images/search_engine/loupe.svg" alt="imagem lupa" />
        </button>
        <input
          name="search"
          type="text"
          placeholder="Procurar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </Styled.Wrapper>
  );
};

export default InputSearch;
