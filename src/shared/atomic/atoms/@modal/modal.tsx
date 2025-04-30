import React from 'react';
import styled from 'styled-components';

import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const ModalContent = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background.modal};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 480px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  z-index: 1;
`;

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
