import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.color.BLUE_DARK};

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .box__icons {
      padding: 8px 16px;
    }

    @media (max-width: ${theme.media.MD}) {
      .box__icons {
        padding: 7px;

        img {
          width: 90%;
        }
      }
    }
  `}
`;
