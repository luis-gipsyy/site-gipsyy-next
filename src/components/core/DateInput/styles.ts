import styled, { css } from 'styled-components';

interface DateInputProps {
  hasGap?: boolean;
}

export const Wrapper = styled.div<DateInputProps>`
  ${({ theme, hasGap }) => css`
    position: relative;
    display: flex;
    width: 100%;
    ${hasGap ? 'padding: 0px;' : 'padding: 5px;'};
    ${hasGap ? 'column-gap: 20px;' : ''};

    .calendar-going {
      width: 50%;

      .input {
        ${hasGap ? 'border-radius: 4px;' : 'border-top-right-radius: 0;'};
        ${hasGap ? 'border-radius: 4px;' : 'border-bottom-right-radius: 0;'};
      }
    }

    .calendar-back {
      width: 50%;

      .input {
        ${hasGap ? 'border-radius: 4px;' : 'border-top-left-radius: 0;'};
        ${hasGap ? 'border-radius: 4px;' : 'border-bottom-left-radius: 0;'};
      }
    }

    .label {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      color: ${theme.color.GREY900};
    }

    .input {
      max-width: 100%;
      min-width: 150px;
      width: 100%;
      height: 56px;
      display: flex;
      align-items: center;
      border-radius: 8px;
      font-size: 18px;
      background-color: ${theme.color.GREY_LIGHT};
      color: ${theme.color.GREY_DARK};
      padding-left: 40px;
      border: 2px solid transparent;
      transition: border 0.2s;
      cursor: pointer;
      box-sizing: border-box;
      transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      ${hasGap ? 'margin-top: 10px;' : ''};

      &:hover {
        border: 2px solid ${theme.color.SECONDARY};
      }
    }
    .icon {
      position: absolute;
      max-width: 100%;
      cursor: pointer;
      ${hasGap ? 'top: 45px;' : 'top: 40px;'};

      color: ${theme.color.SECONDARY};
      margin-left: 15px;
      transition: color 0.5s ease;
    }

    @media (max-width: ${theme.media.MD}) {
      .input {
        min-width: 100%;
      }
    }
  `}
`;
