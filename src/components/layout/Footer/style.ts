import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.color.BLUE};
    font-size: 1.6rem;

    .content__footer {
      display: flex;
      flex-direction: column;
    }

    .logo__footer {
      padding: 40px 0;
    }

    .container__infos {
      display: flex;
      flex-wrap: wrap;
    }

    .box__infos {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 0 20px;
      min-width: 230px;

      p {
        font-size: 1.6rem;
        color: ${theme.color.GREY};
        font-weight: bold;
        border-bottom: 1px solid ${theme.color.GREY};
        padding: 5px 0;
        margin-bottom: 10px;
      }

      a {
        color: ${theme.color.GREY_LIGHT};
        font-size: 1.6rem;
        line-height: 1.8;
      }

      a:hover {
        color: ${theme.color.SECONDARY};
      }
    }

    .logo__social {
      display: flex;
      margin: 10px 0;

      img {
        margin-right: 10px;
        width: 24px;
        height: 24px;
      }
    }

    .footer__copyrights {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 0;

      p {
        color: ${theme.color.GREY};
        margin: 20px 0;
        font-weight: bold;
      }

      span {
        color: ${theme.color.GREY};
        font-size: 1.4rem;
        font-weight: bold;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      .logo__footer {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 60%;
        }
      }

      .box__infos {
        align-items: center;
        margin: 20px 0;

        p {
          width: 100%;
          text-align: center;
        }
      }

      .footer__copyrights {
        text-align: center;
        font-size: 0.75rem;
      }
    }
  `}
`;
