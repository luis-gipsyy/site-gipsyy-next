import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0 120px 0;
    column-gap: 2.5rem;

    .box__help {
      position: relative;
      flex: 1;
      border: 1px solid ${theme.color.GREY300};
      padding: 0 20px;
      cursor: pointer;

      span {
        position: absolute;
        top: -30px;
        background: ${theme.color.LIGHT};
        width: 150px;
        height: 50px;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }

    .link__help {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h2 {
        color: ${theme.color.GREY900};
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.33;
        margin-top: 40px;
      }

      p {
        color: ${theme.color.GREY_DARK};
        margin: 20px 0;
        font-weight: 500;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .box__help {
        margin: 40px 0;
      }

      .link__help {
        padding: 10px;
      }
    }
  `}
`;
