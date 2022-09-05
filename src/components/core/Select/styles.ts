import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 5px;

    label {
      text-transform: capitalize;
      font-weight: 400;
      font-size: 16px;
      color: ${theme.color.GREY900};
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      max-width: 100%;
      min-width: 180px;
      width: 100%;
      height: 56px;
      border-radius: 8px;
      border: 0;
      outline: none;
      cursor: pointer;
      padding-left: 40px;
      font-size: 18px;
      background-color: ${theme.color.GREY_LIGHT};
      color: ${theme.color.GREY_DARK};
      border: 2px solid ${theme.color.GREY_LIGHT};
      color: ${theme.color.GREY_DARK};
      transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      &:hover {
        border: 2px solid ${theme.color.SECONDARY};
      }

      option {
        padding-left: 40px;
      }

      @media (max-width: ${theme.media.MD}) {
        width: 100%;
      }
    }
    .icon {
      position: absolute;
      max-width: 100%;
      width: 25px;
      cursor: pointer;
      top: 45px;
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
`;
