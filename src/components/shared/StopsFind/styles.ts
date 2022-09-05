import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    form {
      display: flex;
      flex-direction: column;
      padding: 30px 0;
      font-weight: bold;
    }

    input {
      width: 230px;
      height: 45px;
      font-size: 1.6rem;
      font-family: 'Poppins';
      border: 1px solid ${theme.color.BLUE};
      background: transparent;
      border-radius: 8px;
      padding: 10px;
      margin-top: 15px;
      cursor: pointer;
    }

    input:focus {
      border-color: ${theme.color.SECONDARY};
      outline: none;
    }

    button {
      display: none;
    }

    .container {
      display: flex;
      justify-content: space-between;
      height: 160px;
      margin: 12px 0;
      padding: 15px 0;
      border-bottom: 1px solid ${theme.color.GREY300};
    }

    .content {
      &__information {
        flex: 1;

        h1 {
          font-size: 1.8rem;
        }

        h2 {
          font-size: 1.6rem;
          font-weight: 400;
          margin: 10px 0;
        }

        a {
          color: ${theme.color.BLUE_LINK};
          font-size: 1.5rem;
        }
      }

      &__map {
        flex: 1;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      .container {
        flex-direction: column;
        height: 50vh;
      }

      .content {
        &__information {
          h1 {
            font-size: 1.6rem;
          }

          h2 {
            font-size: 1.4rem;
          }

          a {
            font-size: 1.4rem;
          }
        }
        &__map {
          margin: 10px 0;

          .googlemap {
            height: 150px;
          }
        }
      }
    }
  `}
`;
