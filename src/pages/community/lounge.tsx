import React, { ReactElement } from "react";
import { Container, MainContent, CategoryContainer } from "@/features/lounge/ui/x/styles";
import { FeedWriterButton } from "@/features/lounge/ui/molecule/feed-writer.button";
import { LoungeMainBanner } from "@/features/lounge/ui/molecule/lounge-main.banner";
import { LoungeCategories } from "@/features/lounge/ui/organism/lounge-categories.component";
import { FeedFamousWidget } from "@/features/lounge/ui/widget/feed.famous.widget";
import { FeedFilter } from "@/features/lounge/ui/organism/feed-filter.component";
import { FeedList } from "@/features/lounge/ui/organism/feed-list.components";

export function LoungePage(): ReactElement {
  // TODO: [analytics] 인기 있는 피드 조회
  // TODO: [라운지 메인 배너 조회] 배너 조회
  // TODO: category 조회 for 피드 필터
  // TODO: feed 목록 조회

  return (
    <Container>
      <FeedFamousWidget />

      <MainContent>
        {/* 라운지 메인 배너 */}
        <LoungeMainBanner />

        {/* 라운지 메인 카테고리 */}
        <CategoryContainer>
          <LoungeCategories />
          <FeedWriterButton>글쓰기</FeedWriterButton>
        </CategoryContainer>

        {/* 피드 필터 */}
        <FeedFilter />

        {/* 피드 목록 */}
        <FeedList />
      </MainContent>
    </Container>
  );
}
