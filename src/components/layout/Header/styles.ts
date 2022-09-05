import styled, { css } from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarProps {
  isOpen: boolean;
}

export const WrapperHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 70px;
    background-color: ${theme.color.WHITE};
    font-size: 1.6rem;

    display: flex;
    align-items: center;

    .main-menu {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-rows: 1fr;
      align-items: center;

      &__left {
        height: 100%;
        display: flex;
        align-items: center;

        button {
          background-color: inherit;
          padding: 0;
          border: none;
          cursor: pointer;
        }

        & > button > span {
          display: block;
          width: 25px;
          height: 3px;
          background: ${theme.color.GREY900};
          border-radius: 25%;

          &:not(:nth-child(3)) {
            margin-bottom: 4px;
          }
        }

        &:focus {
          outline: none;
        }
      }

      &__center {
        justify-self: center;

        .logo {
          height: 47px;
        }
      }

      &__right {
        display: flex;
        justify-self: right;
        align-items: center;
        justify-content: space-between;

        a {
          color: ${theme.color.GREY900};
          font-weight: ${theme.font.weight.SEMI_BOLD};
          line-height: 1.33;
        }
      }
    }

    @media (max-width: ${theme.media.SM}) {
      .logo {
        height: 40px;
      }
      .help {
        display: none;
      }
    }
  `}
`;

export const WrapperSideBar = styled.div<SidebarProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.6rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 100vh;
    color: ${theme.color.WHITE};
    left: 0;
    top: 0;
    transform: translateX(-200%);
    transition: all 200ms cubic-bezier(0.95, 0.05, 0.795, 0.035);
    border-right: 1px solid ${theme.color.BLACK};
    background-color: ${theme.color.WHITE};
    max-width: 320px;
    width: 100%;
    z-index: 999999;

    ${isOpen && 'transform: translateX(0%);'}

    .header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 150px;
      background-color: ${theme.color.PRIMARY};

      &__close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 20px;
        z-index: 10002;

        cursor: pointer;
      }

      button {
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: bold;
        color: ${theme.color.WHITE};
        letter-spacing: -0.1px;
        border: solid 1px ${theme.color.BLUE_LIGHT};
        border-radius: 2px;
        padding: 10px 40px;
        background: transparent;
      }
    }

    .content {
      display: flex;
      align-items: flex-start;
      padding: 20px;
      font-size: 16px;
      height: 80vh;
      overflow: auto;

      a {
        display: flex;
        align-items: center;
        width: 250px;

        height: 65px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        color: ${theme.color.GREY900};
        vertical-align: sub;
        display: flex;
        align-items: center;
        padding: 12px 16px;
        border-bottom: 2px solid ${theme.color.GREY_LIGHT};
        border-radius: ${theme.border.radius};
        transition: background-color 0.4s ease-in-out;
      }

      img {
        max-width: 100%;
        width: 35px;
        margin-right: 20px;
      }

      a:hover {
        background-color: ${theme.color.GREY_LIGHT};
      }

      @media (max-width: ${theme.media.MD}) {
        a {
          height: 65px;
        }

        img {
          width: 30px;
        }
      }
    }
  `}
`;

export const Backdrop = styled.div<SidebarProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    background-color: ${theme.color.BLACK_RGBA};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 9999;

    ${isOpen && 'opacity: 1; visibility: visible;'}
  `}
`;
