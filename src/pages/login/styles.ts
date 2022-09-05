import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 90px;
    border: 2px solid ${theme.color.GREY_LIGHT};

    span {
      color: #a5a5a5;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 2;
      margin-bottom: 1.4rem;
    }

    .header {
      max-width: 100%;
      width: 100%;
      display: flex;
      justify-content: center;

      font-size: 1.6rem;
      color: ${theme.color.BLUE_DARK};
      margin: 0px auto;

      h1 {
        max-width: 100%;
        position: relative;
        text-align: center;
        flex: 1;
        padding: 3.5rem 0;
        font-size: 1.8rem;
        color: ${theme.color.GREY_DARK};

        &.active {
          color: ${theme.color.BLUE_DARK};
          background-color: ${theme.color.WHITE};
        }

        &:hover {
          cursor: pointer;
        }
      }

      @media (max-width: ${theme.media.MD}) {
        flex-direction: column;

        h1 {
          max-width: 100%;
        }
      }
    }

    .content {
      max-width: 100%;
      width: 100%;
      display: flex;
      justify-content: center;

      padding: 4rem;
      font-size: 1.6rem;
      background-color: ${theme.color.WHITE};
      color: ${theme.color.BLUE_DARK};
      flex-direction: column;
      margin: 0px auto;

      .footer {
        max-width: 550px;
        width: 100%;
        margin: 10px auto;
        font-size: 1.4rem;
        text-align: center;

        a {
          margin-left: 1rem;
        }
      }

      .form {
        flex-wrap: wrap;
        max-width: 550px;
        width: 100%;
        margin: 20px auto;

        &__group {
          display: flex;
          justify-content: space-between;
        }

        &__header,
        &__submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        &__header {
          margin-bottom: 2.5rem;

          h1 {
            font-size: 1.6rem;
          }
        }

        &__submit {
          margin-top: 2.5rem;
          font-size: 1.6rem;
        }
      }

      @media (max-width: ${theme.media.MD}) {
        .form__header {
          justify-content: center;
          text-align: center;
          font-size: 1rem;

          h1 {
            margin-bottom: 2rem;
          }
        }

        .form__group {
          flex-direction: column;
        }

        .form__submit {
          font-size: 1.4rem;
          flex-direction: column-reverse;
          a {
            margin-top: 1.5rem;
          }
        }

        .footer {
          display: flex;
          justify-content: center;
        }
      }
    }
  `}
`;
