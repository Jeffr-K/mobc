import React from 'react';

import { Search } from 'lucide-react';

import * as S from './styles';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const SearchInput = ({ placeholder = '검색...', onChange }: SearchInputProps) => (
  <S.SearchWrapper>
    <S.Input placeholder={placeholder} onChange={e => onChange?.(e.target.value)} />
    <S.SearchIcon>
      <Search size={18} />
    </S.SearchIcon>
  </S.SearchWrapper>
);
