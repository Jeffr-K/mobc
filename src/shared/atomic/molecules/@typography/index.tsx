import React from 'react';
import * as S from './styles';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  color?: string;
  marginBottom?: number;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant, 
  children,
  color,
  marginBottom
}) => {
  return (
    <S.Text 
      as={variant}
      $variant={variant}
      $color={color}
      $marginBottom={marginBottom}
    >
      {children}
    </S.Text>
  );
};