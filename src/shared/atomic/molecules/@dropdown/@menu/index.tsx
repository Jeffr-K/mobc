import React, { useState } from 'react';

import * as S from './styles';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: Array<{
    label: string;
    onClick: () => void;
  }>;
}

export const DropdownMenu = ({ trigger, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.DropdownContainer onBlur={() => setIsOpen(false)}>
      <S.DropdownButton onClick={() => setIsOpen(!isOpen)}>{trigger}</S.DropdownButton>
      <S.DropdownContent $isOpen={isOpen}>
        {items.map((item, index) => (
          <S.DropdownItem
            key={index}
            onClick={() => {
              item.onClick();
              setIsOpen(false);
            }}
          >
            {item.label}
          </S.DropdownItem>
        ))}
      </S.DropdownContent>
    </S.DropdownContainer>
  );
};
