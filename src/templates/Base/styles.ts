import styled, { css } from 'styled-components';

interface BaseProps {
  backgroundColor?: 'primary' | 'secondary';
}

export const Wrapper = styled.div<BaseProps>`
  ${({ theme, backgroundColor }) => css`
    background-color: ${backgroundColor === 'primary'
      ? theme.color.LIGHT
      : theme.color.WHITE};
  `}
`;
