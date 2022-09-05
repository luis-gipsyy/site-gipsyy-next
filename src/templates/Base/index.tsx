import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

import { Header, Footer } from 'components/layout';

import * as Styled from './styles';

interface BaseProps {
  title?: string;
  backgroundColor?: 'primary' | 'secondary';
  children?: ReactNode;
}

const Base = ({
  title = 'Gipsyy',
  backgroundColor = 'primary',
  children,
}: BaseProps): ReactElement => {
  return (
    <Styled.Wrapper backgroundColor={backgroundColor}>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      {children}
      <Footer />
    </Styled.Wrapper>
  );
};

export default Base;
