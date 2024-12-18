import React from 'react';
import * as Molecule from '@/atomic/molecules';
import * as S from './styles';

export function Requirement(): React.ReactElement {
  return (
    <S.Container>
      <S.Content>
        <Molecule.Typography variant="h1" children="추가 정보" />
      </S.Content>
      <S.Content>
        <Molecule.MobileInput placeholder=" '-' 없이 입력해주세요." $marginTop={8} />
      </S.Content>
      <S.Content>
        <Molecule.BirthDateInput placeholder="YYYY-MM-DD" $marginTop={8} />
      </S.Content>
    </S.Container>
  );
}