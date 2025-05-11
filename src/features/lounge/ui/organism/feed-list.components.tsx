import React, { ReactElement, useState } from "react";
import { styled } from "styled-components";
import { feeds } from "@/features/lounge/ui/organism/feeds";
import { Feeds } from "@/features/lounge/ui/organism/post-feed.component";
import { Feed } from "@/features/lounge/ui/organism/feed-detail.component";
// import { useFeedsQueryHook } from "@/features/lounge/api/hooks";

export function FeedList(): ReactElement {
  // const feedsQuery = useFeedsQueryHook({});
  const [selectedFeedId, setSelectedFeedId] = useState<number | null>(feeds[0]?._id ?? null);

  const handleFeedSelect = (feedId: number) => {
    setSelectedFeedId(feedId);
  };

  return (
    <ContentContainer>
      <FeedListSection>
        <Feeds feeds={feeds} selectedFeedId={selectedFeedId} onFeedSelect={handleFeedSelect} />
      </FeedListSection>
      <FeedDetailSection>
        {selectedFeedId ? (
          <Feed feed={feeds.find(f => f._id === selectedFeedId)} />
        ) : (
          <EmptyMessage>게시글을 선택하면 이곳에서 확인할 수 있습니다.</EmptyMessage>
        )}
      </FeedDetailSection>
    </ContentContainer>
  );
}

export const ContentContainer = styled.div`
  display: flex;
  gap: 24px;
  padding-right: 0;
`;

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
