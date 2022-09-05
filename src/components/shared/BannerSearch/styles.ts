import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-image: url('/images/search_engine/search-background.svg');
    background-size: cover;
    width: 100%;

    .search__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 230px;

      h1 {
        font-size: 3rem;
        margin-bottom: 30px;
        font-weight: 600;
        color: ${theme.color.WHITE};
      }
    }

    @media (max-width: ${theme.media.MD}) {
      text-align: center;

      .search__content {
        h1 {
          font-size: 2rem;
        }
      }
    }
  `}
`;
