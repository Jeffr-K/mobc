import React, { ReactElement } from "react";
import { styled } from "styled-components";

export function FeedFamousWidget(): ReactElement {
  return (
    <LeftSidebar>
      <SidebarTitle>인기 피드</SidebarTitle>
      <PopularList>
        <PopularItem>
          <RankNumber>1</RankNumber>
          <PopularTitle>첫 회사를 퇴사했습니다</PopularTitle>
          <Badge>HOT</Badge>
        </PopularItem>
        <PopularItem>
          <RankNumber>2</RankNumber>
          <PopularTitle>개발자 로드맵 공유</PopularTitle>
        </PopularItem>
        <PopularItem>
          <RankNumber>3</RankNumber>
          <PopularTitle>주니어 개발자 면접 후기</PopularTitle>
        </PopularItem>
      </PopularList>
    </LeftSidebar>
  );
}

export const LeftSidebar = styled.aside`
  width: 240px;
  padding: 0;
  background: none;
  height: calc(100vh - 84px);
  position: sticky;
  top: 84px;

  > * {
    padding: 0 24px;
  }

  > *:first-child {
    margin-top: 24px;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding: 0;
`;

export const PopularList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
`;

export const PopularItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  gap: 8px;
`;

export const RankNumber = styled.span`
  color: #868e96;
  font-size: 14px;
  font-weight: 600;
  min-width: 16px;
`;

export const PopularTitle = styled.span`
  flex: 1;
  font-size: 14px;
  color: #495057;

  &:hover {
    color: #228be6;
  }
`;

export const Badge = styled.span`
  background: linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
`;
