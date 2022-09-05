import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: 60px 0 30px 0;
    background: ${theme.color.WHITE};
    border-radius: 3px;

    .content {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      padding: 30px;
    }

    .content__support {
      display: flex;
      flex-direction: column;
      flex: 1;

      &--title {
        display: flex;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        color: ${theme.color.BLUE};
        margin: 10px 0;
      }

      img {
        width: 20px;
        height: 20px;
        margin-right: 20px;
      }
    }

    .content__whatsapp {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;

      h2 {
        font-size: 1.7rem;
      }

      p {
        margin: 10px 0;
      }
    }
    .support__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 230px;
      height: 50px;
      border-radius: 10px;
      font-size: 1.6rem;
      padding: 0px 10px;
      color: ${theme.color.WHITE};

      background: ${theme.color.GREEN_LIGHT};
      border: none;

      img {
        width: 40px;
        height: 40px;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      .content__support {
        margin-bottom: 30px;
      }
    }
  `}
`;
