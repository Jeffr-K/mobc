import React from 'react';
import * as S from './styles';

type CheckboxProps = {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export function Checkbox({ name, checked, onChange, required = false }: CheckboxProps): React.ReactElement {
  return (
    <S.Container>
      <S.Input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <S.Label htmlFor={name}>{name}</S.Label>
    </S.Container>
  );
} 