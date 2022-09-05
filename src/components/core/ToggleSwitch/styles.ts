import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 5px;

    span {
      color: ${theme.color.GREY900};
    }

    input[type='checkbox'] {
      height: 0;
      width: 0;
      visibility: hidden;
    }

    label {
      cursor: pointer;
      text-indent: -9999px;
      width: 6.2rem;
      height: 3.6rem;
      background: ${theme.color.GREY_DARK};
      display: block;
      border-radius: 100px;
      position: relative;
    }

    label:after {
      content: '';
      position: absolute;
      top: 4px;
      left: 5px;
      width: 2.8rem;
      height: 2.8rem;
      background: ${theme.color.WHITE};
      border-radius: 90px;
      transition: 0.3s;
    }

    input:checked + label {
      background: ${theme.color.GREEN};
    }

    input:checked + label:after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }

    label:active:after {
      width: 130px;
    }
  `}
`;
