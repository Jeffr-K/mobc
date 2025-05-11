import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaUsers } from 'react-icons/fa';

// 필터 옵션 타입 정의
type FilterType = '최신순' | '인기순' | '마감임박순';

export function CavePage(): React.ReactElement {
  const [caves] = useState([
    {
      id: 1,
      title: "React 스터디 모집",
      description: "주 2회 React 스터디원을 모집합니다",
      members: 4,
      maxMembers: 6,
      category: "스터디",
      subCategory: "프론트엔드",
      tags: ["React", "Frontend", "JavaScript"]
    },
    {
      id: 2, 
      title: "오픈소스 프로젝트 참여자 모집",
      description: "TypeScript 기반 오픈소스 프로젝트입니다",
      members: 3,
      maxMembers: 5,
      category: "오픈소스",
      subCategory: "백엔드",
      tags: ["TypeScript", "OSS", "Backend"]
    },
    {
      id: 3,
      title: "핀테크 스타트업 개발자 모집",
      description: "블록체인 기반 핀테크 서비스 개발",
      members: 2,
      maxMembers: 4,
      category: "스타트업",
      subCategory: "블록체인",
      tags: ["Blockchain", "Fintech", "Startup"]
    },
    {
      id: 4,
      title: "프론트엔드 개발자 커뮤니티",
      description: "프론트엔드 개발자들의 모임입니다",
      members: 15,
      maxMembers: 30,
      category: "커뮤니티",
      subCategory: "프론트엔드",
      tags: ["Frontend", "Community", "Network"]
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("스터디");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<FilterType>('최신순');

  const categories = {
    채용: ["신입", "경력", "인턴", "프리랜서", "계약직"],
    스타트업: ["핀테크", "블록체인", "AI", "커머스", "헬스케어"],
    스터디: ["프론트엔드", "백엔드", "모바일", "데브옵스", "알고리즘"],
    커뮤니티: ["프론트엔드", "백엔드", "데브옵스", "디자인", "PM"],
    오픈소스: ["웹", "시스템", "라이브러리", "프레임워크", "도구"],
    프로젝트: ["웹서비스", "모바일앱", "게임", "AI/ML", "블록체인"],
    부트캠프: ["코딩테스트", "웹개발", "앱개발", "데이터사이언스", "클라우드"]
  };

  const navigate = useNavigate();

  return (
    <Container>
      <LeftSidebar>
        <SidebarTitle>인기 동굴</SidebarTitle>
        <PopularList>
          <PopularItem>
            <RankNumber>1</RankNumber>
            <PopularTitle>React 스터디 모집</PopularTitle>
            <Badge>HOT</Badge>
          </PopularItem>
          <PopularItem>
            <RankNumber>2</RankNumber>
            <PopularTitle>오픈소스 프로젝트</PopularTitle>
          </PopularItem>
          <PopularItem>
            <RankNumber>3</RankNumber>
            <PopularTitle>핀테크 스타트업</PopularTitle>
          </PopularItem>
        </PopularList>
      </LeftSidebar>

      <MainContent>
        <BannerSection>
          <BannerContent>
            <h1>새로운 동굴을 탐험하세요!</h1>
            <p>다양한 개발자들과 함께 성장할 수 있는 기회</p>
          </BannerContent>
        </BannerSection>

        <CategoryContainer>
          <MainCategories>
            <MainCategoryButton 
              selected={selectedCategory === "전체"}
              onClick={() => setSelectedCategory("전체")}
            >
              전체
            </MainCategoryButton>
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
        </CategoryContainer>

        <FilterSection>
          <SearchResult>동굴 검색 결과: {caves.length}건</SearchResult>
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
                isSelected={currentFilter === '마감임박순'}
                onClick={() => {
                  setCurrentFilter('마감임박순');
                  setIsFilterOpen(false);
                }}
              >
                마감임박순
              </DropdownItem>
            </DropdownMenu>
          </FilterDropdown>
        </FilterSection>

        <CaveListSection>
          <CaveGrid>
            {caves.map((cave) => (
              <CaveCard 
                key={cave.id} 
                onClick={() => navigate(`/cave/${cave.id}`)}
              >
                <CardHeader>
                  <CategoryWrapper>
                    <CardCategory>{cave.category}</CardCategory>
                    <CardSubCategory>{cave.subCategory}</CardSubCategory>
                  </CategoryWrapper>
                  <Title>{cave.title}</Title>
                </CardHeader>
                <CardDescription>{cave.description}</CardDescription>
                <CardMeta>
                  <MemberCount>
                    <FaUsers />
                    <span>{cave.members}/{cave.maxMembers}명</span>
                  </MemberCount>
                  <TagList>
                    {cave.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </TagList>
                </CardMeta>
              </CaveCard>
            ))}
          </CaveGrid>
        </CaveListSection>
      </MainContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  background: #fff;
  width: 100%;
`;

const LeftSidebar = styled.aside`
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

const SidebarTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding: 0;
`;

const PopularList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
`;

const PopularItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  gap: 12px;

  span {
    padding: 0;
  }
`;

const RankNumber = styled.span`
  color: #868e96;
  font-size: 14px;
  font-weight: 600;
  min-width: 24px;
`;

const PopularTitle = styled.span`
  flex: 1;
  font-size: 14px;
  color: #495057;
  
  &:hover {
    color: #228be6;
  }
`;

const Badge = styled.span`
  background: linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 24px 0 24px 24px;
  background: #fff;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BannerSection = styled.section`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 24px;
`;

const BannerContent = styled.div`
  text-align: center;
  h1 {
    font-size: 32px;
    margin-bottom: 12px;
  }
  p {
    font-size: 18px;
    opacity: 0.9;
  }
`;

const CategoryContainer = styled.section`
  margin-bottom: 24px;
`;

const MainCategories = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

const MainCategoryButton = styled.button<{ selected: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: ${props => props.selected ? '#667eea' : '#f5f5f5'};
  color: ${props => props.selected ? 'white' : '#333'};
  transition: all 0.2s;

  &:hover {
    background: ${props => props.selected ? '#667eea' : '#e5e5e5'};
  }
`;

const SubCategories = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const SubCategoryTag = styled.span`
  padding: 6px 12px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
    border-color: #999;
  }
`;

const FilterSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const SearchResult = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;

const FilterDropdown = styled.div`
  position: relative;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background: white;
  color: #495057;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
  }

  svg {
    font-size: 12px;
  }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 10;
  min-width: 120px;
`;

const DropdownItem = styled.button<{ isSelected?: boolean }>`
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: ${props => props.isSelected ? '#f8f9fa' : 'white'};
  color: ${props => props.isSelected ? '#228be6' : '#495057'};
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #f8f9fa;
  }
`;

const CaveListSection = styled.section`
  width: 100%;
  overflow: hidden;
`;

const CaveGrid = styled.div`
  display: grid;
  width: 99.999%;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CaveCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    border-color: #dee2e6;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 16px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
`;

const CardCategory = styled.span`
  background: #e9ecef;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #495057;
  margin-right: 4px;
  display: inline-block;
`;

const CardSubCategory = styled.span`
  background: #f1f3f5;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #868e96;
  display: inline-block;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-top: 0;
  color: #1a1a1a;
  line-height: 1.4;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #495057;
  line-height: 1.5;
  margin-top: 8px;
`;

const CardMeta = styled.div`
  border-top: 1px solid #eee;
  margin-top: 20px;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MemberCount = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    font-size: 16px;
    color: #666;
  }
`;

const TagList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const Tag = styled.span`
  background: #f5f5f5;
  padding: 4px 8px;
  margin: 0;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  white-space: nowrap;
`;