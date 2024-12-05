import React from 'react';
import * as S from './styles';

interface SearchBoxProps {
  isOpen: boolean;
}

export const SearchBox = ({ isOpen }: SearchBoxProps) => {
  if (!isOpen) return null;

  return (
    <S.Container>
      <S.Header>
        <S.Title>최근 검색어</S.Title>
      </S.Header>
      <S.Content>
        <S.EmptyState>
          최근 검색 내역이 없습니다.
        </S.EmptyState>
      </S.Content>
    </S.Container>
  );
}; 