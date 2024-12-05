import React from 'react';
import * as S from './styles';

interface NotificationBoxProps {
  isOpen: boolean;
}

export const NotificationBox = ({ isOpen }: NotificationBoxProps) => {
  if (!isOpen) return null;

  return (
    <S.Container>
      <S.Header>
        <S.Title>알림</S.Title>
      </S.Header>
      <S.Content>
        <S.EmptyState>
          새로운 알림이 없습니다.
        </S.EmptyState>
      </S.Content>
    </S.Container>
  );
}; 