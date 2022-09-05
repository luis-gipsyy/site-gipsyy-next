import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-width: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    font-size: 1.6rem;

    .label {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: ${theme.color.GREY900};

      img {
        width: 18px;
        margin-right: 10px;
      }
    }

    .input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${theme.color.PRIMARY};
      height: 56px;

      .remove,
      .add {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${theme.color.GREY_LIGHT};
        color: ${theme.color.PRIMARY};
        font-size: 20px;
        width: 32px;
        height: 32px;
        border: none;
        margin-right: 10px;
        margin-left: 10px;
        border-radius: 50%;
        cursor: pointer;

        &:disabled {
          color: ${theme.color.GREY_DARK};
        }
      }
    }

    @media (max-width: ${theme.media.MD}) {
      flex-direction: row;
      justify-content: flex-start;
    }
  `}
`;
