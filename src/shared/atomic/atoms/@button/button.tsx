import React from 'react';

import * as S from '@/shared/atomic/atoms/@button/styles';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <S.ButtonStyles
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      type={type}
      {...rest}
    >
      {children}
    </S.ButtonStyles>
  );
}
