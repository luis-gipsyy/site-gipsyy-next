import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0 30px 0;

    .breadcrumbs {
      font-weight: 500;
      color: ${theme.color.DARK};

      a:hover {
        text-decoration: underline;
      }

      img {
        width: 40px;
        height: 8px;
      }
    }

    .search__page {
      position: relative;
      display: flex;
      align-items: center;

      img {
        position: absolute;
        left: 15px;
        width: 20px;
        height: 20px;
      }

      input {
        width: 356px;
        height: 42px;
        background: transparent;
        padding: 0px 50px;
        font-size: 1.7rem;
        color: ${theme.color.DARK};
        border: 1px solid ${theme.color.GREY300};
        border-radius: 3px;
      }

      input:focus {
        background: transparent;
        box-shadow: 0 0 0 3px #87cefa;
        outline: none;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      display: flex;
      flex-direction: column;
      font-size: 1.4rem;

      .search__page {
        margin-top: 20px;

        input {
          width: 100%;
          font-size: 1.4rem;
        }
      }
    }
  `}
`;
