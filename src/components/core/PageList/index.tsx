import Link from 'next/link';
import React, { useState, ReactElement } from 'react';

import { LuggageGet } from 'models/luggage';
import { TicketGet } from 'models/ticket';
import { ChildrenGet } from 'models/children';
import { CovidGet } from 'models/covid19';

import { Container } from 'styles/Grid';
import * as Styled from './styles';

interface PageListProps {
  data: Array<LuggageGet | TicketGet | ChildrenGet | CovidGet>;
  hasWidth?: boolean;
  hasWeight?: boolean;
}

const PageList = ({
  data,
  hasWidth,
  hasWeight,
}: PageListProps): ReactElement => {
  const [isActive, setIsActive] = useState('');

  return (
    <Styled.Wrapper hasWidth={Boolean(hasWidth)} hasWeight={Boolean(hasWeight)}>
      <Container>
        <div className="content">
          <nav className="pagelist">
            <ul>
              {data.map(({ id, title }) => (
                <li className={isActive == `on${id}` ? 'active' : ''} key={id}>
                  <Link href={`#${id}`}>
                    <a
                      onClick={() => {
                        setIsActive(`on${id}`);
                      }}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <section className="page__content">
            {data.map(({ id, title, content }) => (
              <div id={id} key={id}>
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
              </div>
            ))}
          </section>
        </div>
        <div className="update">
          <p>
            <span>Última atualização: </span>Julho 22
          </p>
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default PageList;
