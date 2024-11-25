import React from 'react';

import * as S from './styles';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

export const IconButton = ({ icon, onClick, title }: IconButtonProps) => (
  <S.StyledIconButton onClick={onClick} title={title}>
    {icon}
  </S.StyledIconButton>
);
