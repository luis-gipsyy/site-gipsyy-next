import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    position: relative;

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      input {
        font-size: 1.8rem;
        padding-left: 60px;
        width: 540px;
        height: 50px;
        border: none;
        border-radius: 3px;
        color: ${theme.color.DARK};
      }

      input:focus {
        background: white;
        box-shadow: 0 0 0 3px #87cefa;
        border-color: #333;
        outline: none;
      }

      button {
        border: none;

        img {
          position: absolute;
          left: 15px;
          top: 15px;
          width: 20px;
        }
      }
    }

    @media (max-width: ${theme.media.MD}) {
      width: 100%;

      input {
        width: 100%;
        font-size: 1.6rem;
      }
    }
  `}
`;
