import React from 'react';

import * as MoleculeProfileCard from '@/atomic/molecules/@card/@profile/styles';
import * as FeedGenerator from '@/atomic/organisms/@feed/@post/styles';
import * as MoleculeNavigatorFooter from '@/atomic/organisms/@navigator/@bottom/styles';
import * as Suggestions from '@/atomic/organisms/@suggestion/styles';
import * as OrganismTrendingTopics from '@/atomic/organisms/@trend/@topics/styles';

import * as MoleculeNavigator from '../../../molecules/@menu/@navigation/styles';
import * as S from './styles';

interface LoungeLayoutProps {
  children?: React.ReactNode;
}

export function LoungeLayout({ children }: LoungeLayoutProps) {
  return (
    <S.Container>
      <S.LeftSidebar>
        <MoleculeProfileCard.ProfileCard />
        <MoleculeNavigator.NavigationMenu />
      </S.LeftSidebar>

      <S.MainContent>
        <FeedGenerator.FeedGenerator />
        {children}
      </S.MainContent>

      <S.RightSidebar>
        <OrganismTrendingTopics.TrendingTopics />
        <Suggestions.Suggestions />
        <MoleculeNavigatorFooter.Footer />
      </S.RightSidebar>
    </S.Container>
  );
}
