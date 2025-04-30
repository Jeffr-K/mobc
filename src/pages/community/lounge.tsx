import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { FaChevronDown } from 'react-icons/fa';
import { Container, LeftSidebar, SidebarTitle, PopularList, PopularItem, RankNumber, PopularTitle, Badge, MainContent, BannerSection, BannerContent, CategoryContainer, CategoryLeft, MainCategories, SubCategories, MainCategoryButton, WriteButton, FilterSection, SearchResult, FilterDropdown, FilterButton, DropdownMenu, DropdownItem, EmptyMessage, FeedListSection, FeedDetailSection, SubCategoryTag, ContentContainer } from "@/features/community/ui/x/styles";
import { PostFeed } from '@/features/community/ui/organism/post-feed.component';
import { FeedDetail } from '@/features/community/ui/organism/feed-detail.component';

type FilterType = '최신순' | '인기순' | '조회순';

export function LoungePage(): React.ReactElement {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<FilterType>('최신순');
  const [selectedFeedId, setSelectedFeedId] = useState<number | null>(1);

  const categories = {
    전체: [],
    개발: ["프론트엔드", "백엔드", "데브옵스", "모바일", "블록체인"],
    커리어: ["취업", "이직", "면접", "회사생활", "연봉"],
    스킬: ["알고리즘", "CS지식", "클라우드", "데이터베이스", "보안"],
    커뮤니티: ["질문/답변", "프로젝트", "스터디", "네트워킹", "모각코"],
    라이프: ["개발자일상", "취미", "건강", "리뷰", "잡담"]
  };

  const feeds = [
    {
      id: 1,
      category: "개발",
      subCategory: "프론트엔드",
      author: {
        name: "김개발",
        title: "프론트엔드 개발자",
        avatar: "https://avatars.githubusercontent.com/u/12345678",
        shortDescription: "React와 TypeScript를 사랑하는"
      },
      content: "React 18과 TypeScript 5.0의 조합으로 새 프로젝트를 시작했습니다. 타입 안정성이 정말 좋아졌네요. 특히 새로운 기능들이 인상적입니다.",
      views: 128,
      likes: 24,
      comments: 5,
      createdAt: "2024-01-15T09:30:00Z"
    },
    {
      id: 2,
      category: "개발",
      subCategory: "백엔드",
      author: {
        name: "이백엔드",
        title: "백엔드 개발자",
        avatar: "https://avatars.githubusercontent.com/u/87654321",
        shortDescription: "Spring과 MSA를 좋아하는"
      },
      content: "Spring Boot 3.0에서 Virtual Thread를 적용해봤습니다. 기존 대비 성능이 크게 개선되었어요. 벤치마크 결과를 공유드립니다.",
      views: 95,
      likes: 15,
      comments: 3,
      createdAt: "2024-01-14T09:30:00Z"
    },
    // {
    //   id: 3,
    //   category: "개발",
    //   subCategory: "백엔드",
    //   author: {
    //     name: "이백엔드",
    //     title: "백엔드 개발자",
    //     avatar: "https://avatars.githubusercontent.com/u/87654321",
    //     shortDescription: "Spring과 MSA를 좋아하는"
    //   },
    //   content: "Spring Boot 3.0에서 Virtual Thread를 적용해봤습니다. 기존 대비 성능이 크게 개선되었어요. 벤치마크 결과를 공유드립니다.",
    //   views: 95,
    //   likes: 15,
    //   comments: 3,
    //   createdAt: "2024-01-14T09:30:00Z"
    // },
    {
      id: 3,
      category: "개발",
      subCategory: "데브옵스",
      author: {
        name: "박데브옵스",
        title: "데브옵스 엔지니어",
        avatar: "https://avatars.githubusercontent.com/u/11223344",
        shortDescription: "클라우드와 자동화를 사랑하는"
      },
      content: "K8s 클러스터 운영 중 겪은 트러블슈팅 경험을 공유합니다. Pod 자동 확장 관련 이슈였는데요...",
      views: 156,
      likes: 32,
      comments: 8,
      createdAt: "2024-01-13T09:30:00Z"
    }
  ];

  const handleFeedSelect = (feedId: number) => {
    setSelectedFeedId(feedId);
  };

  return (
    <Container>
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

      <MainContent>
        <BannerSection>
          <BannerContent>
            <h1>개발자들과 이야기를 나눠보세요</h1>
            <p>다양한 경험과 지식을 공유하는 공간입니다</p>
          </BannerContent>
        </BannerSection>

        <CategoryContainer>
          <CategoryLeft>
            <MainCategories>
              {Object.keys(categories).map((category) => (
                <MainCategoryButton
                  key={category}
                  selected={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </MainCategoryButton>
              ))}
            </MainCategories>
            <SubCategories>
              {categories[selectedCategory].map((subCategory) => (
                <SubCategoryTag key={subCategory}>
                  {subCategory}
                </SubCategoryTag>
              ))}
            </SubCategories>
          </CategoryLeft>
          <WriteButton onClick={() => navigate('/community/write')}>
            <FileText size={16} />
            글쓰기
          </WriteButton>
        </CategoryContainer>

        <FilterSection>
          <SearchResult>피드 {feeds.length}건</SearchResult>
          <FilterDropdown>
            <FilterButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
              {currentFilter}
              <FaChevronDown />
            </FilterButton>
            <DropdownMenu isOpen={isFilterOpen}>
              <DropdownItem
                isSelected={currentFilter === '최신순'}
                onClick={() => {
                  setCurrentFilter('최신순');
                  setIsFilterOpen(false);
                }}
              >
                최신순
              </DropdownItem>
              <DropdownItem
                isSelected={currentFilter === '인기순'}
                onClick={() => {
                  setCurrentFilter('인기순');
                  setIsFilterOpen(false);
                }}
              >
                인기순
              </DropdownItem>
              <DropdownItem
                isSelected={currentFilter === '조회순'}
                onClick={() => {
                  setCurrentFilter('조회순');
                  setIsFilterOpen(false);
                }}
              >
                조회순
              </DropdownItem>
            </DropdownMenu>
          </FilterDropdown>
        </FilterSection>

        <ContentContainer>
          <FeedListSection>
            <PostFeed
              feeds={feeds}
              selectedFeedId={selectedFeedId}
              onFeedSelect={handleFeedSelect}
            />
          </FeedListSection>
          <FeedDetailSection>
            {selectedFeedId ? (
              <FeedDetail feed={feeds.find(f => f.id === selectedFeedId)} />
            ) : (
              <EmptyMessage>게시글을 선택하면 이곳에서 확인할 수 있습니다.</EmptyMessage>
            )}
          </FeedDetailSection>
        </ContentContainer>
      </MainContent>
    </Container>
  );
}







