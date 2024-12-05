import React from 'react';

import { Navigator } from '../../../organisms/@navigator/@header';
import * as S from './styles';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.Container>
      <Navigator />
      <S.Content>
        <S.ContentWrapper>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Container>
  );
};
