import React from 'react';
import { API_BACK_END } from 'services/api';
import { Container } from 'styles/Grid';
import * as Styled from './styles';

const SomeDestinations = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    API_BACK_END.get('/static_pages?locale=pt-BR&format=json').then((res) => {
      setData(res.data);
    });
  }, []);

  const response = data.find((item) => {
    return item.slug === 'roadmap';
  });
  return (
    <Container>
      <Styled.Wrapper>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: response?.content }}
        ></div>
        <aside>
          <img src="/images/lat-roadmapBR1.jpg" alt="imagem mapa" />
        </aside>
      </Styled.Wrapper>
    </Container>
  );
};

export default SomeDestinations;
