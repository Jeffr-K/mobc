import React from 'react';

import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={e => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        {title && <h2>{title}</h2>}
        {children}
      </S.ModalContainer>
    </S.Overlay>
  );
};
