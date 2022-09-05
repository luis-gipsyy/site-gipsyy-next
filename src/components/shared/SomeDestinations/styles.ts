import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    aside {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      flex-wrap: wrap;
      flex: 1;
      padding-top: 200px;

      img {
        width: 60%;
      }
    }

    .content {
      h2 {
        font-size: 3.2rem;
        margin-top: 30px;
      }

      img {
        display: none;
      }

      p + p {
        margin: 20px 0;
      }

      a {
        color: ${theme.color.BLUE_LINK};
      }

      a:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      flex-direction: column;

      aside {
        width: 100%;
        padding-top: 0px;
        margin: 10px 0 60px 0;

        img {
          width: 100%;
        }
      }

      .content {
        h2 {
          font-size: 3rem;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.4rem;
        }

        a {
          font-size: 1.3rem;
        }
      }
    }
  `}
`;
