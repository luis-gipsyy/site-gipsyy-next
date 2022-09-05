import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      min-height: 100%;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: ${theme.color.LIGHT};
      font-size: 1.6rem;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul,
    li,
    a {
      text-decoration: none;
      list-style: none;
    }

    .icon-arrow {
      position: absolute;
      top: 50%;
      display: block;
      width: 50px;
      z-index: 1;
      height: 20px;
      color: #fff;
      right: 5px;

      svg {
        cursor: pointer;
        opacity: 0.6;
        transition: 0.7s all linear;
        transform: rotate(180deg);

        &:hover {
          opacity: 1;
        }
      }

      &.left {
        left: 5px;
        svg {
          transform: rotate(0deg);
        }
      }
    }
  `}
  `;

export default GlobalStyle;
