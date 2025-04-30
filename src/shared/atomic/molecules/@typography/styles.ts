import styled, { css } from 'styled-components';

const variants = {
  h1: css`
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
  `,
  h2: css`
    font-size: 28px;
    font-weight: 600;
    line-height: 1.3;
  `,
  h3: css`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
  `,
  h4: css`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  `,
  h5: css`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
  `,
  h6: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  `
};

export const Text = styled.h1<{
  $variant: keyof typeof variants;
  $color?: string;
  $marginBottom?: number;
}>`
  ${props => variants[props.$variant]};
  color: ${props => props.$color || props.theme.colors.gray900};
  margin-bottom: ${props => props.$marginBottom ? `${props.$marginBottom}px` : '0'};
`;
