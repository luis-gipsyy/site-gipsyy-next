import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    margin: 30px 0;

    .description__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      color: ${theme.color.PRIMARY};
      line-height: 22px;

      h2 {
        font-size: 2.5rem;
      }

      p {
        margin-top: 20px;
      }

      ul {
        padding: 30px;
      }

      li {
        list-style: disc;
      }
    }

    .logo__transparent {
      width: 110%;
    }

    .transport__container {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
    }

    .transport__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 260px;
        height: 260px;
      }
    }

    .transport__btn {
      width: 220px;
      height: 50px;
      border: 1px solid ${theme.color.PRIMARY};
      background: transparent;
      color: ${theme.color.PRIMARY};
      border-radius: 2px;
      font-size: 1.8rem;
      margin: 10px 0;
      cursor: pointer;
      transition: all 0.5s ease;
    }

    .transport__btn:hover {
      background: ${theme.color.PRIMARY};
      color: ${theme.color.WHITE};
    }

    @media (max-width: ${theme.media.MD}) {
      display: flex;
      flex-direction: column;

      .description__container {
        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 1.4rem;
        }

        ul {
          font-size: 1.6rem;
        }
      }

      .logo__transparent {
        display: none;
      }

      .transport__content {
        margin: 2px;

        img {
          width: 130px;
          height: 170px;
        }
      }

      .transport__btn {
        width: 130px;
        font-size: 1.5rem;
      }
    }
  `}
`;
