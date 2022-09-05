import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .tabs__content {
      background: ${theme.color.GREY_LIGHT};
    }
    .tabs {
      display: flex;
      height: 67px;
      border: 1px solid ${theme.color.GREY300};

      h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33.3%;
        font-size: 2rem;
        font-weight: 400;
        color: ${theme.color.PRIMARY};
      }

      .active {
        background: ${theme.color.PRIMARY};
        color: ${theme.color.WHITE};
        font-weight: 600;
      }
    }

    .content {
      background: ${theme.color.GREY_LIGHT};
      padding: 0 25px 20px 25px;
      margin: 0 0 80px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    .calendar__container {
      display: flex;
      align-items: center;
      margin: 20px 0;

      .icon {
        color: ${theme.color.BLUE_LIGHT};
      }

      label {
        color: ${theme.color.PRIMARY};
      }

      input {
        height: 48px;
        border: 1px solid #c4c4c4;
        border-radius: 4px;
        box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
      }
    }

    .destination__container {
      margin-bottom: 20px;

      label {
        color: ${theme.color.PRIMARY};
      }

      input {
        height: 48px;
        border: 1px solid #c4c4c4;
        border-radius: 4px;
        box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
        margin: 10px 0;
      }
    }

    .passenger__container {
      display: flex;
      justify-content: space-between;
      column-gap: 20px;

      .passenger__title {
        display: flex;
        align-items: center;
        flex: 1;

        img {
          width: 30px;
          height: 30px;
        }

        span {
          font-size: 1.6rem;
          color: ${theme.color.GREY900};
          margin-left: 10px;
        }
      }

      .count__content {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        background: ${theme.color.LIGHT};
        width: 100%;
        height: 50px;
        border-radius: 6px;
        padding-left: 15px;

        .input {
          width: 100%;
        }

        .label {
          display: none;
        }

        p {
          color: ${theme.color.GREY900};
          font-size: 1.6rem;
        }

        .remove {
          font-size: 3.9rem;
          background: ${theme.color.LIGHT};
          color: ${theme.color.GREY_DARK};
          border-radius: 0px;
          margin-bottom: 5px;
          margin-right: 0px;
        }

        .add {
          background: ${theme.color.LIGHT};
          color: ${theme.color.GREY_DARK};
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0px;
        }

        .value {
          font-size: 1.8rem;
          font-weight: bold;
        }
      }
    }

    .toggle__container {
      margin: 10px 0 20px 0;
    }

    .map__container {
      margin: 10px 0 40px 0;
      height: 150px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
    }

    .footer__content {
      display: flex;
      flex: 1;
      justify-content: space-between;
    }

    .route {
      display: flex;
      align-items: center;
      flex: 1;

      p {
        color: ${theme.color.PRIMARY};
        font-weight: bold;
        margin-left: 20px;
      }
    }

    .btn__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 220px;
      height: 54px;
      padding: 10px;
      color: ${theme.color.WHITE};
      background: ${theme.color.PRIMARY};
      border: none;
      border-radius: 2px;
      font-size: 1.5rem;
      font-weight: 500;

      img {
        width: 16px;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      background: ${theme.color.GREY_LIGHT};

      .tabs {
        h1 {
          text-align: center;
          font-size: 1.5rem;
        }
      }
      .content {
        padding: 0;
      }

      .calendar__container {
        margin-bottom: 20px;
      }

      .passenger__container {
        flex-direction: column;
      }

      .passenger__title {
        margin-top: 10px;
      }

      .count__content {
        margin: 5px 0;
      }

      .footer {
        flex-direction: column;
        margin: 10px 0;
        font-size: 1.3rem;
      }

      .btn__container {
        display: flex;
        justify-content: flex-end;
        margin: 20px 0;
      }

      .btn__footer {
        width: 134px;
      }
    }
  `}
`;
