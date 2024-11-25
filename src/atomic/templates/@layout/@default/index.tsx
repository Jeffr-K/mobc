import React from 'react';

import { Navigator } from '../../../organisms/@navigator/@header';
import * as S from './styles';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.Layout>
      <Navigator />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
};
