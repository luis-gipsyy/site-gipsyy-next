import React, { ReactElement } from 'react';

import luggageData from 'services/luggage.json';
import ticketData from 'services/ticket.json';
import childrenData from 'services/children.json';
import covid19Data from 'services/children.json';

import * as Styled from './styles';
import { Container } from 'styles/Grid';
import Link from 'next/link';

interface SearchResultsProps {
  searchData: string | undefined;
}

const SearchResults = (props: SearchResultsProps): ReactElement => {
  const data = [
    ...luggageData.data,
    ...ticketData.data,
    ...childrenData.data,
    ...covid19Data.data,
  ];

  return (
    <Container>
      <Styled.Wrapper>
        {data
          .filter((item) => {
            if (!props.searchData) {
              return item;
            }

            return item.content
              .toLowerCase()
              .includes(props.searchData.toLowerCase());
          })
          .map(({ type, content, title }, index) => (
            <div className="limit-css" key={index}>
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
              <Link href={`/${type}`}>
                <a>Ler mais</a>
              </Link>
            </div>
          ))}
      </Styled.Wrapper>
    </Container>
  );
};

export default SearchResults;
