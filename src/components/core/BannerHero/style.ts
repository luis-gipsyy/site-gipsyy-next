import React from 'react';
import styled, { css } from 'styled-components';

interface SectionContentProps {
  insideContainer?: React.ReactNode;
  image?: string;
  height?: string;
  justify?: string;
  align?: string;
  fontSize?: string;
  color?: string;
  weight?: string;
}

export const Wrapper = styled.section<SectionContentProps>`
  ${({
    theme,
    image,
    height,
    justify,
    align,
    fontSize,
    color,
    weight,
    insideContainer,
  }) => css`
    ${image
      ? `background-image: url(${image});`
      : `background: ${theme.color.GRADIENT_BLUE};`}

    ${insideContainer ? 'background: none;' : ''};
    background-size: cover;

    .inside__container {
      img {
        width: 100%;
      }
    }

    .banner__content {
      display: flex;
      ${align ? `align-items: ${align};` : 'align-items: center;'};
      ${justify ? `justify-content: ${justify};` : 'justify-content: center;'};
      ${height ? `height: ${height};` : 'height: 400px;'};
      ${insideContainer ? 'height: 100%;' : ''};
      ${insideContainer ? 'padding: 0px' : 'padding: 30px 0;'};
    }

    h1 {
      ${fontSize ? `font-size: ${fontSize};` : 'font-size: 8rem;'};
      ${color ? `color: ${color};` : `color: ${theme.color.WHITE};`};
      ${weight ? `font-weight: ${weight};` : 'font-weight: 500;'};
    }

    @media (max-width: ${theme.media.MD}) {
      .banner__content {
        display: flex;
        justify-content: center;
        ${align ? `align-items: ${align};` : 'align-items: center;'};
      }

      h1 {
        font-size: 3.5rem;
      }
    }
  `}
`;
