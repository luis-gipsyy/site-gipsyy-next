import styled, { css } from 'styled-components';

interface SectionContentProps {
  flexDirection?: string;
  hasPadding: boolean;
  hasImage: boolean;
  hasTitle: boolean;
  titleSize: 'small' | 'medium' | 'large';
  textSize: 'small' | 'medium' | 'large';
  titleNoMargin: boolean;
}

const sectionContentTitleSizeModifier = {
  small: css`
    font-size: 1.6rem;
  `,
  medium: css`
    font-size: 3rem;
  `,
  large: css`
    font-size: 4.5rem;
    line-height: 60px;
  `,
};

const sectionContentTextSizeModifier = {
  small: css`
    font-size: 1.6rem;
    line-height: 1.9;
    font-weight: 400;
  `,
  medium: css`
    font-size: 2rem;
    line-height: 1.5;
  `,
  large: css`
    font-size: 3.2rem;
    line-height: 1.5;
  `,
};

export const Wrapper = styled.section<SectionContentProps>`
  ${({
    theme,
    textSize,
    titleSize,
    titleNoMargin,
    flexDirection,
    hasPadding,
  }) => css`
    display: flex;
    align-items: flex-start;
    line-height: 36px;
    margin: 4rem 0;
    ${flexDirection
      ? `flex-direction: ${flexDirection};`
      : 'flex-direction: row;'};

    ${textSize && sectionContentTextSizeModifier[textSize]}

    img {
      max-width: 100%;
      ${flexDirection ? 'width: 50%;' : 'width: 100%;'};
      height: auto;

      display: block;
      object-fit: contain;
    }

    .content {
      ${hasPadding ? 'padding: 0px;' : 'padding: 0 4rem;'};

      span {
        color: ${theme.color.PRIMARY};
        font-weight: 600;
      }

      ul,
      li {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 2rem;
        list-style: outside;
      }

      &__title {
        ${titleSize && sectionContentTitleSizeModifier[titleSize]}
        font-weight: 700;
        color: ${theme.color.PRIMARY};

        ${!titleNoMargin &&
        css`
          margin-bottom: 2rem;
        `}
      }

      b {
        font-weight: 700;
        color: ${theme.color.BLUE_DARK};
      }

      p + p {
        margin-top: 2rem;
      }
    }

    @media (max-width: ${theme.media.MD}) {
      ${flexDirection
        ? 'flex-direction: column-reverse;'
        : 'flex-direction: column;'};
      justify-content: center;
      align-items: center;
      font-size: 1.7rem;

      img {
        min-width: 100%;
        width: 100%;
        margin: 0 auto;
      }

      .content {
        padding: 2rem 0;
      }
    }
  `}
`;
