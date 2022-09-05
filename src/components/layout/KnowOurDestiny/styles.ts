import styled, { css } from 'styled-components';

export const WrapperKnowOurDestiny = styled.div`
  ${({ theme }) => css`
    height: auto;
    background-color: #17428d;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 15px;

    .title {
      margin: 0;
      font-size: 1.4rem;
      display: flex;
      font-weight: ${theme.font.weight.REGULAR};
      color: ${theme.color.WHITE};
    }

    .know_text {
      font-size: 1.4rem;
      font-weight: ${theme.font.weight.REGULAR};
      color: ${theme.color.WHITE};
      display: block;
      margin-left: 5px;
      text-decoration: underline;

      &:hover {
        color: ${theme.color.SECONDARY};
      }
    }

    @media (min-width: 992px) {
      flex-direction: row;
    }
  `}
`;
