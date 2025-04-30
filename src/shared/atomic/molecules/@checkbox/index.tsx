import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, checked, onChange, required = false }) => {
  return (
    <Container>
      <Input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={name}>{name}</label>
    </Container>
  );
}; 