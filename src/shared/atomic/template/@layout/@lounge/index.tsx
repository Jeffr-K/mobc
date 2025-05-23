import React from "react";
import styled from "styled-components";

import * as MoleculeProfileCard from "@/shared/atomic/molecules/@card/@profile/styles";
// import * as FeedGenerator from '@/atomic/organisms/@feed/@post/styles';
import * as MoleculeNavigatorFooter from "@/shared/atomic/organisms/@navigator/@bottom/styles";
import * as Suggestions from "@/shared/atomic/organisms/@suggestion/styles";
import * as OrganismTrendingTopics from "@/shared/atomic/organisms/@box/@trend/@topics/styles";
import * as S from "./styles";

interface LoungeLayoutProps {
  children?: React.ReactNode;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 3fr;
  gap: ${props => props.theme.spacing.md};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md};
`;

const Content = styled.main`
  min-height: calc(100vh - ${props => props.theme.spacing.xl});
`;

const Sidebar = styled.aside`
  position: sticky;
  top: ${props => props.theme.spacing.md};
  height: fit-content;
`;

export function LoungeLayout({ children }: LoungeLayoutProps) {
  return (
    <Container>
      <Sidebar>
        {/* 내가 팔로우한 기업들 */}
        <MoleculeProfileCard.ProfileCard />
      </Sidebar>

      <Content>
        {/* <FeedGenerator.FeedGenerator /> */}
        {children}
        {/* TODO: 인기 글 */}
        {/* 광고 피드 삽입 */}
      </Content>

      <Sidebar>
        {/* TODO: 내 분야와 관련된 핫 뉴스 */}
        <OrganismTrendingTopics.TrendingTopics />
        <Suggestions.Suggestions />
        <MoleculeNavigatorFooter.Footer />
        {/* // TODO: 배너 영역 들어갈 것임 */}
        {/* TODO: 인기 있는 프로젝트가 들어갈 것임. */}
      </Sidebar>
    </Container>
  );
}
