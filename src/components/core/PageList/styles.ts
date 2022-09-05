import styled, { css } from 'styled-components';

interface PageListProps {
  hasWidth?: boolean;
  hasWeight?: boolean;
}

export const Wrapper = styled.section<PageListProps>`
  ${({ theme, hasWidth, hasWeight }) => css`
    .content {
      display: flex;
      padding: 20px 0;
    }

    .pagelist {
      width: 40%;

      li + li {
        margin: 25px 0;
      }

      a {
        color: ${theme.color.BLUE};
        font-weight: 500;
      }

      a:hover {
        text-decoration: underline;
      }
      .active {
        width: 85%;
        background: ${theme.color.SECONDARY};
        padding: 5px 0;
        border-radius: 3px;
        text-align: center;

        a {
          color: ${theme.color.WHITE};
        }

        a:hover {
          text-decoration: underline;
        }
      }
    }

    .page__content {
      width: 100%;

      h1 {
        margin-bottom: 30px;
        font-size: 2.6rem;
        font-weight: 500;
        color: ${theme.color.BLUE};
      }

      p {
        font-size: 1.8rem;
        line-height: 1.5;
        margin: 20px 0;
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

    .update {
      width: 78%;
      text-align: center;
      margin: 80px 0;

      p {
        font-weight: 500;
      }

      span {
        font-size: 1.7rem;
        font-weight: 500;
        color: ${theme.color.BLUE};
      }
    }

    @media (max-width: ${theme.media.MD}) {
      .pagelist {
        display: none;
      }

      .page__content {
        font-size: 1.4rem;

        h1 {
          font-size: 2rem;
        }
      }

      .update {
        width: 100%;
      }
    }
  `}
`;
