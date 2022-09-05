import styled, { css } from 'styled-components';

interface InputProps {
  variant: 'primary' | 'secondary';
  hasError?: boolean;
  disabled?: boolean;
}

const inputModifier = {
  primary: css<InputProps>`
    ${({ theme, disabled, hasError }) => css`
      position: relative;

      .label {
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: ${theme.color.GREY900};
      }
      .input {
        max-width: 100%;
        min-width: 180px;
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        font-size: 18px;
        background-color: ${theme.color.GREY_LIGHT};
        color: ${theme.color.GREY_DARK};
        padding-left: 40px;
        border: 2px solid transparent;
        transition: border 0.2s;
        cursor: pointer;
        box-sizing: border-box;
        transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

        ${disabled && `cursor: not-allowed; opacity: 0.5;`};
        ${hasError && `border: 2px solid red`};

        &:hover {
          border: 2px solid ${theme.color.SECONDARY};
        }
      }
      .icon {
        position: absolute;
        max-width: 100%;
        width: 25px;
        cursor: pointer;
        top: 42px;
        margin-left: 15px;
        transition: color 0.5s ease;
      }
      .error {
        font-weight: lighter;
        font-size: 1.6rem;
        line-height: 1.5;
        color: ${theme.color.RED};
      }
    `}
  `,
  secondary: css<InputProps>`
    ${({ theme }) => css`
      position: relative;

      img {
        display: none;
        visibility: hidden;
      }

      .label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem 0;
        font-size: 1.6rem;
        color: ${theme.color.BLACK};
        pointer-events: none;
        transition: 0.5s;
      }

      .input {
        width: 100%;
        padding: 1rem 0;
        font-size: 1.6rem;
        color: ${theme.color.BLACK};
        margin-bottom: 3rem;
        border: none;
        border-bottom: 0.1rem solid ${theme.color.GREY300};
        outline: none;
        background: transparent;
        transition: 0.5s;
      }

      .input:focus ~ .label,
      .input:not(:placeholder-shown) ~ .label {
        top: -20px;
        left: 0;
        font-size: 1.2rem;
      }
    `}
  `,
};

export const Wrapper = styled.div<InputProps>`
  ${({ variant }) => css`
    ${inputModifier[variant]}
  `}
`;
