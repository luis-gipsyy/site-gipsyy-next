import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';

import { API_BACK_END } from 'services/api';
import { Container } from 'styles/Grid';
import SectionMap from '../SectionMap';
import * as Styled from './styles';
import useDebounce from 'hooks/useDebounce';

const StopsFind = () => {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = useState<string>('');
  const debouncedValue = useDebounce<string>(search, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toUpperCase());
  };

  React.useEffect(() => {
    API_BACK_END.get('/locations?locale=pt-BR&format=json&per_page=1000').then(
      (res) => {
        setData(res.data);
      }
    );
  }, [debouncedValue]);

  const response = data;

  return (
    <Container>
      <Styled.Wrapper>
        <form action="/stops-information">
          <label htmlFor="">Encontre a sua parada</label>
          <input
            type="text"
            placeholder="Cidade / Parada"
            onChange={handleChange}
            value={search}
          />
          <button type="submit"></button>
        </form>

        <div>
          {response
            ?.filter((value) => {
              if (!search) {
                return null;
              }
              return value.name.toLowerCase().includes(search.toLowerCase());
            })
            .map(
              ({
                external_id,
                name,
                description,
                country_code,
                latitude,
                longitude,
              }) => {
                return (
                  <div key={external_id} className="container">
                    <div className="content__information">
                      <h1>
                        {name} - {country_code}
                      </h1>
                      <h2>{description}</h2>
                      <Link
                        href={`https://www.google.com/maps/place/${latitude},${longitude}`}
                      >
                        <a target="_blank">Ver no mapa</a>
                      </Link>
                    </div>
                    <div className="content__map">
                      {latitude && (
                        <SectionMap
                          latitude={Number(latitude)}
                          longitude={Number(longitude)}
                        />
                      )}
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default StopsFind;
