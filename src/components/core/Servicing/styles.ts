import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    text-align: center;
    background: ${theme.color.PRIMARY};
    padding: 40px 0;
    color: ${theme.color.WHITE};

    .servicing__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .box__servicing {
      img {
        border-radius: 12px;
        margin: 20px 0;
        transition: all 0.8s ease-in;
      }
    }

    .box__servicing:hover {
      img {
        transform: scale(1.1);
      }
    }

    @media (max-width: ${theme.media.MD}) {
      .servicing__content {
        justify-content: center;
      }

      .box__servicing {
        img {
          width: 256px;
          height: 126px;
        }
      }
    }
  `}
`;
