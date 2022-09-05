import { ReactElement, ReactNode } from 'react';
import { Container } from 'styles/Grid';
import * as Styled from './styles';

interface SectionCentralizerProps {
  children: ReactNode;
}

const SectionCentralizer = ({
  children,
}: SectionCentralizerProps): ReactElement => (
  <Container>
    <Styled.Wrapper>{children}</Styled.Wrapper>
  </Container>
);

export default SectionCentralizer;
