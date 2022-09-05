import { ReactElement } from 'react';

import * as Styled from './styles';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
}

const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
}: ButtonProps): ReactElement => {
  return (
    <Styled.Wrapper variant={variant} size={size}>
      {label}
    </Styled.Wrapper>
  );
};

export default Button;
