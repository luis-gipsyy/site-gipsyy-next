import { ReactElement } from 'react';
import * as Styled from './style';

interface IconBarCardProps {
  children?: React.ReactNode;
}

const IconBarCard = ({ children }: IconBarCardProps): ReactElement => {
  return <Styled.WrapperCard>{children}</Styled.WrapperCard>;
};

export default IconBarCard;
