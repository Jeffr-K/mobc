import styled from 'styled-components';
import { ButtonProps } from '@/atomic/atoms/@button/index';

export const ButtonStyles = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  font-weight: 600;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all 0.2s ease;
  opacity: ${props => (props.disabled ? 0.6 : 1)};

  ${props => {
    const variantStyle = getVariantStyles(props.variant, props.theme);
    const sizeStyle = getSizeStyles(props.size, props.theme);

    return `
     background: ${variantStyle.background};
     color: ${variantStyle.color};
     border: ${variantStyle.border};
     padding: ${sizeStyle.padding};
     font-size: ${sizeStyle.fontSize};
     
     &:hover {
       background: ${props.disabled ? variantStyle.background : variantStyle.hoverBg};
     }
   `;
  }}
`;

const getVariantStyles = (variant: ButtonProps['variant'], theme: any) => {
  switch (variant) {
    case 'primary':
      return {
        background: theme.colors.primary,
        color: theme.colors.white,
        border: 'none',
        hoverBg: theme.colors.primaryHover,
      };
    case 'secondary':
      return {
        background: 'transparent',
        color: theme.colors.text.primary,
        border: `1px solid ${theme.colors.border}`,
        hoverBg: theme.colors.gray100,
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: theme.colors.text.primary,
        border: 'none',
        hoverBg: theme.colors.gray100,
      };
    default:
      return {
        background: theme.colors.primary,
        color: theme.colors.white,
        border: 'none',
        hoverBg: theme.colors.primaryHover,
      };
  }
};

const getSizeStyles = (size: ButtonProps['size'], theme: any) => {
  switch (size) {
    case 'sm':
      return {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        fontSize: '0.875rem',
      };
    case 'lg':
      return {
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        fontSize: '1.125rem',
      };
    default:
      return {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: '1rem',
      };
  }
};
