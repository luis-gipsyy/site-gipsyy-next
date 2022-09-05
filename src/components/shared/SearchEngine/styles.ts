import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 100%;
    margin-top: -40px;
    padding: 32px 46px;
    z-index: 999;
    width: 100%;
    background-color: ${theme.color.WHITE};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 12px;

    @media (max-width: ${theme.media.XL}) {
      display: flex;
      align-items: inherit;
      flex-direction: column;
      padding: 20px;
    }
  `}
`;
