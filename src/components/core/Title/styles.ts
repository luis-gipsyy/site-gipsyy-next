import styled, { css } from 'styled-components';

interface TitleProps {
  size?: 'small' | 'medium' | 'large';
  align: 'left' | 'center' | 'right';
  weight: 'normal' | 'bold' | 'light';
  hasPadding: boolean;
}

const titleSizeModifier = {
  small: css`
    font-size: 2rem;
  `,
  medium: css`
    font-size: 3.5rem;
  `,
  large: css`
    font-size: 4.5rem;
    line-height: 60px;
  `,
};

const titleAlignModifier = {
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
  left: css`
    text-align: left;
  `,
};

const titleWeightModifier = {
  bold: css`
    font-weight: 900;
  `,
  normal: css`
    font-weight: 400;
  `,
  light: css`
    font-weight: 300;
  `,
};

export const Wrapper = styled.h1<TitleProps>`
  ${({ theme, align, weight, size, hasPadding }) => css`
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 48px;
    margin: 5rem 0;
    color: ${theme.color.BLUE_DARK};

    ${hasPadding && `padding: 0rem 2rem;`}
    ${size && titleSizeModifier[size]}
    ${align && titleAlignModifier[align]}
    ${weight && titleWeightModifier[weight]}

    @media (max-width: ${theme.media.MD}) {
      font-size: 2.4rem;
      line-height: 24px;
      padding: 0;
    }
  `}
`;
