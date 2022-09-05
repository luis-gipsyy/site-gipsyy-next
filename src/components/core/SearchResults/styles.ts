import styled, { css } from 'styled-components';

interface SearchResultsProps {
  hasWidth?: boolean;
  hasWeight?: boolean;
}

export const Wrapper = styled.section<SearchResultsProps>`
  ${({ theme, hasWeight, hasWidth }) => css`
    .limit-css {
      display: flex;
      flex-direction: column;
      width: 60%;
      border-bottom: 1px solid ${theme.color.GREY300};
      margin: 60px 0;

      a {
        color: ${theme.color.PRIMARY};
        text-align: end;
        font-weight: 500;
        margin: 20px 0;
      }

      a:hover {
        text-decoration: underline;
      }

      h1 {
        margin-bottom: 30px;
        font-size: 2.6rem;
        font-weight: 500;
        color: ${theme.color.BLUE};
      }

      p {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-height: 120px;
        line-height: 2;
        font-size: 1.8rem;
      }

      span {
        display: inline-block;
        ${hasWeight ? 'font-weight: 600;' : 'font-weight: 500;'};
        ${hasWidth ? 'width: 100%' : 'width: 100px;'};
        color: ${theme.color.BLUE};
      }

      li {
        list-style: disc;
        margin: 0px 20px;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      .limit-css {
        width: 100%;

        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 1.8rem;
        }

        a {
          font-size: 1.5rem;
        }
      }
    }
  `}
`;
