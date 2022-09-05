import styled, { css } from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'medium' | 'large';
}

export const ButtonModifier = {
  primary: css`
    background-color: ${({ theme }) => theme.color.GREEN};
    color: ${({ theme }) => theme.color.WHITE};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.color.WHITE};
    color: ${({ theme }) => theme.color.SECONDARY};
    border: 2px solid ${({ theme }) => theme.color.SECONDARY};
    min-width: auto;
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    max-width: 190px;
    width: 100%;
    min-width: 120px;
    height: 48px;
    font-size: 1.6rem;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;
    padding: 12px 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-family: ${({ theme }) => theme.font.family.MAIN};

    ${ButtonModifier[variant]}

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    @media (max-width: ${theme.media.MD}) {
      max-width: 100%;
      min-width: auto;
      height: 4rem;
      font-size: 1.4rem;
    }
  `}
`;
