import styled, { css } from "styled-components";

export const WrapperCarouselBanner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    .item-banner {
      width: 100%;

      img {
        max-width: 100%;
        height: auto;
      }

      &__desktop {
        display: none;
      }
    }

    @media (min-width: ${theme.media.SM}) {
      .item-banner {
        &__mobile {
          display: none;
        }

        &__desktop {
          display: inherit;
        }
      }
    }
  `}
`;
