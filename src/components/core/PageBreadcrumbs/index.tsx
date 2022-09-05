import InputSearch from 'components/shared/InputSearch';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './styles';

interface BreadcrumbsProps {
  pageLocation: string;
  pageName: string;
}

const PageBreadcrumbs = ({
  pageLocation,
  pageName,
}: BreadcrumbsProps): ReactElement => {
  const [title, setTitle] = React.useState('');
  const location = useRouter();

  React.useEffect(() => {
    setTitle(location.pathname);
    if (`${pageLocation}` === location.pathname) setTitle(`${pageName}`);
  }, [location]);

  return (
    <Container>
      <Styled.Wrapper>
        <div className="breadcrumbs">
          <Link href="/">
            <a>Gipsyy</a>
          </Link>
          <img src="/images/icons/arrow-next.svg" alt="icone seta" />
          <Link href="/help">
            <a>Ajuda</a>
          </Link>
          <img src="/images/icons/arrow-next.svg" alt="icone seta" />
          <Link href={`${pageLocation}`}>
            <a>{title}</a>
          </Link>
        </div>
        <div className="search__page">
          <InputSearch />
        </div>
      </Styled.Wrapper>
    </Container>
  );
};

export default PageBreadcrumbs;
