import React, { ReactElement, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Feeds } from "@/features/lounge/ui/organism/post-feed.component";
import { useFeedsQuery } from "@/features/lounge/infrastructure/api/feed/feed.query.hook";
import { useAtomValue } from "jotai";
import {
  categoriesListAtom,
  selectedCategoryAtom,
  selectedSubCategoryAtom,
} from "@/features/lounge/infrastructure/adapter/category.adapter";
import { Feed } from "@/features/lounge/ui/organism/feed-detail.component";
import { useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/features/lounge/infrastructure/api/querykeys";

export function FeedList(): ReactElement {
  const categories = useAtomValue(categoriesListAtom);
  const selectedCategoryId = useAtomValue(selectedCategoryAtom);
  const selectedSubCategoryId = useAtomValue(selectedSubCategoryAtom);
  const queryClient = useQueryClient();

  const activeCategory = React.useMemo(() => {
    if (selectedSubCategoryId !== null) {
      return categories.find(cat => cat._id === selectedSubCategoryId);
    }

    if (selectedCategoryId !== null) {
      return categories.find(cat => cat._id === selectedCategoryId);
    }

    return null;
  }, [categories, selectedCategoryId, selectedSubCategoryId]);

  const queryParams = React.useMemo(() => {
    const params: {
      page: number;
      size: number;
      sort: string;
      categoryId?: number | null;
    } = {
      page: 0,
      size: 100,
      sort: "createdAt:desc",
    };

    // 전체 카테고리(0) 선택 시 categoryId를 명시적으로 null로 설정
    if (selectedCategoryId === 0) {
      params.categoryId = null;
    }
    // 하위 카테고리가 선택된 경우
    else if (selectedSubCategoryId !== null) {
      params.categoryId = selectedSubCategoryId;
    }
    // 상위 카테고리가 선택된 경우
    else if (selectedCategoryId !== null) {
      params.categoryId = selectedCategoryId;
    }

    return params;
  }, [selectedCategoryId, selectedSubCategoryId]);

  const { feedItems, isLoading } = useFeedsQuery(queryParams);
  console.log("After query call, params:", queryParams, "loading:", isLoading, "items:", feedItems.length);
  useEffect(() => {
    console.log("Query params changed:", queryParams);
  }, [queryParams]);
  useEffect(() => {
    console.log("Category changed, invalidating queries...");
    queryClient.invalidateQueries({
      queryKey: QueryKeys.feeds.list,
    });
  }, [selectedCategoryId, selectedSubCategoryId, queryClient]);

  const [selectedFeedId, setSelectedFeedId] = useState<string | null>(null);

  useEffect(() => {
    if (feedItems.length > 0) {
      setSelectedFeedId(feedItems[0].identifier?.uuid || null);
    } else {
      setSelectedFeedId(null);
    }
  }, [feedItems]);

  const handleFeedSelect = (uuid: string) => {
    setSelectedFeedId(uuid);
  };

  const selectedFeed = feedItems.find(feed => feed.identifier?.uuid === selectedFeedId);

  if (isLoading) {
    return <LoadingMessage>피드를 불러오는 중...</LoadingMessage>;
  }

  return (
    <PageContainer>
      {/* 카테고리 정보를 상단에 배치 */}
      {activeCategory && (
        <CategoryInfoHeader>
          <CategoryName>
            {/* 상위/하위 카테고리 계층 구조 표시 */}
            {selectedSubCategoryId && selectedCategoryId && (
              <>
                <CategoryParent>{categories.find(cat => cat._id === selectedCategoryId)?.name}</CategoryParent>
                <CategorySeparator> &gt; </CategorySeparator>
              </>
            )}
            {activeCategory.name}
          </CategoryName>
        </CategoryInfoHeader>
      )}

      {/* 피드 목록과 상세 내용을 포함하는 컨테이너 */}
      <ContentContainer>
        <FeedListSection>
          {feedItems.length === 0 ? (
            <EmptyMessage>
              {activeCategory ? `${activeCategory.name} 카테고리에 게시글이 없습니다.` : "표시할 피드가 없습니다."}
            </EmptyMessage>
          ) : (
            <Feeds feeds={feedItems} selectedFeedId={selectedFeedId} onFeedSelect={handleFeedSelect} />
          )}
        </FeedListSection>

        <FeedDetailSection>
          {selectedFeed ? <Feed feed={selectedFeed} /> : <EmptyMessage>게시글을 선택하면 이곳에서 확인할 수 있습니다.</EmptyMessage>}
        </FeedDetailSection>
      </ContentContainer>
    </PageContainer>
  );
}

export const FeedListSection = styled.div`
  flex: 4;
  min-width: 0;
`;

export const FeedDetailSection = styled.div`
  flex: 6;
  position: sticky;
  top: 24px;
  min-height: 400px;
  max-height: calc(100vh - 200px);
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
`;

export const EmptyMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #868e96;
  font-size: 14px;
`;

const CategoryName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
  display: flex;
  align-items: center;
`;

const CategoryParent = styled.span`
  color: #667eea;
`;

const CategorySeparator = styled.span`
  margin: 0 8px;
  color: #aaa;
`;

const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #495057;
  font-size: 14px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CategoryInfoHeader = styled.div`
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 24px;
  padding-right: 0;
  width: 100%;
`;
