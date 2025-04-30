import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './styles';

export function DefaultLayout(): React.ReactElement {
  return (
    <S.Container>
      <S.Content>
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
      </S.Content>
    </S.Container>
  );
}
