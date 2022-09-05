import styled, { css } from 'styled-components';

export const WrapperCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 258px;
    padding: 30px 0;

    p {
      color: ${theme.color.BLUE_LIGHT};
      font-weight: bold;
      margin-left: 16px;
    }

    img {
      width: 50px;
      height: 50px;
    }

    @media (max-width: ${theme.media.MD}) {
      p {
        font-size: 12px;
        margin: 0px 3px;
      }

      padding: 20px 0;
      width: 150px;
    }
  `}
`;
