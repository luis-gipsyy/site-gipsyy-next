import { ReactElement, ReactNode } from 'react';

import { Container } from 'styles/Grid';
import * as Styled from './styles';

interface TitleProps {
  align?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
  children: ReactNode;
  hasPadding?: boolean;
}

const Title = ({
  children,
  align = 'center',
  weight = 'normal',
  size = 'medium',
  hasPadding,
}: TitleProps): ReactElement => {
  return (
    <Container>
      <Styled.Wrapper
        align={align}
        weight={weight}
        size={size}
        hasPadding={Boolean(hasPadding)}
      >
        {children}
      </Styled.Wrapper>
    </Container>
  );
};

export default Title;
