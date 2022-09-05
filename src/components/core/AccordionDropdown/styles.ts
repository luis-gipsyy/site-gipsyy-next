import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;

    .question {
      display: flex;
      justify-content: space-between;
      background: ${theme.color.WHITE};
      color: ${theme.color.GREY900};
      width: 768px;
      padding: 10px;
      font-size: 1.6rem;
      line-height: inherit;
      margin: 0.5px 0;
      cursor: pointer;
    }

    .answer {
      background: ${theme.color.WHITE};
      color: ${theme.color.GREY900};
      width: 768px;
      padding: 20px;
      font-size: 1.8rem;
      line-height: 1.5;
    }

    @media (max-width: ${theme.media.MD}) {
      .question {
        width: 100%;
      }

      .answer {
        width: 100%;
      }
    }

  `}
`;
