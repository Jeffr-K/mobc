import React from 'react';
import * as S from './styles';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  $fullWidth?: boolean;
  $marginTop?: number;
  $fontSize?: number;
  $fontWeight?: number;
  $color?: string;
}

export const Input: React.FC<InputProps> = ({ 
  type = 'text',
  placeholder = '',
  value = '',
  onChange = () => {},
  $fullWidth = true,
  $marginTop = 0,
  $fontSize = 14,
  $fontWeight = 400,
  $color = '#000',
}) => {
  return (
    <S.Container $fullWidth={$fullWidth}>
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $marginTop={$marginTop}
        $fontSize={$fontSize}
        $fontWeight={$fontWeight}
        $color={$color}
      />
    </S.Container>
  );
};