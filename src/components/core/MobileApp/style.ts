import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .box__app {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }

    .box__app__title {
      font-size: 1.75rem;
      color: ${theme.color.BLUE_LIGHT};
      img {
        margin: 10px 0;
      }
    }

    .box__app__qrcode {
      display: flex;
    }

    .box__qrcode {
      display: flex;
      flex-direction: column;
      margin: 30px;
    }

    @media (max-width: ${theme.media.MD}) {
      img {
        max-width: 100%;
      }

      .box__app__title {
        position: relative;
        padding: 40px 0 10px 0;
        text-align: center;
        img {
          position: absolute;
          top: -50px;
          left: 0px;
        }
      }

    .box__app__qrcode {
      flex-direction: column;
      align-items: center;
    }

    .box__qrcode {
      width: 150px;
      margin: 10px 0;
    }
  `}
`;
