import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 20px;

    .title {
      line-height: 1.5;
      font-size: 2.8rem;
      color: ${theme.color.PRIMARY};
      margin-bottom: 20px;
    }

    .content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    @media (max-width: ${theme.media.MD}) {
      .title {
        font-size: 20px;
      }
    }
  `}
`;

export const WrapperCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 280px;
    width: 100%;
    height: 390px;
    cursor: pointer;
    border-radius: 12px;
    margin: 5px;

    &:hover {
      background-color: ${theme.color.SECONDARY};
    }

    .card__image {
      max-width: 100%;
      height: 390px;
      border-radius: 12px;
      overflow: hidden;

      &:hover {
        border-radius: 12px;
        border: 2px solid ${theme.color.SECONDARY};
        opacity: 0.7;
      }
    }

    .card__info {
      border-radius: 12px;
      position: absolute;
      width: 242px;
      height: 90px;
      padding: 5px;
      bottom: 10px;
      background-color: ${theme.color.PRIMARY};
      color: ${theme.color.WHITE};
      overflow: hidden;

      .destiny {
        width: 100%;
        display: flex;
        justify-content: center;
        white-space: nowrap;

        font-size: 25px;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 5px;
        padding: 5px;

        img {
          width: 20px;
          margin-right: 5px;
        }
      }

      .derpature {
        width: 100%;
        display: flex;
        justify-content: center;
        white-space: nowrap;
        font-size: 20px;

        img {
          margin-right: 5px;
        }
      }
    }

    .card__price {
      position: absolute;
      width: 180px;
      height: 60px;
      padding: 0 26px;
      top: 0px;

      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      background-color: ${theme.color.WHITE};
      color: ${theme.color.PRIMARY};

      text-align: center;
      font-size: 26px;
      font-weight: bold;

      span {
        font-size: 16px;
        display: block;
        text-align: end;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      width: 100%;
    }
  `}
`;
