import React from 'react';
import * as S from './styles';

interface MessageBoxProps {
  isOpen: boolean;
}

export const MessageBox = ({ isOpen }: MessageBoxProps) => {
  if (!isOpen) return null;

  return (
    <S.Container>
      <S.Header>
        <S.Title>메시지</S.Title>
      </S.Header>
      <S.Content>
        <S.EmptyState>
          새로운 메시지가 없습니다.
        </S.EmptyState>
      </S.Content>
    </S.Container>
  );
}; 