import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  background: #fff;
  width: 100%;
`;

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

export const MainContent = styled.main`
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

export const BannerSection = styled.section`
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

export const BannerContent = styled.div`
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

export const CategoryContainer = styled.section`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 0;
`;

export const CategoryLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CategoryRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const WriteButton = styled.button`
  padding: 8px 24px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background: #5a6fd6;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const MainCategories = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const MainCategoryButton = styled.button<{ selected: boolean }>`
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

export const SubCategories = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SubCategoryTag = styled.span`
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

export const SearchResult = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;

export const FilterDropdown = styled.div`
  position: relative;
`;

export const FilterButton = styled.button`
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

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  margin-right: 24px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 10;
  min-width: 120px;
`;

export const DropdownItem = styled.button<{ isSelected?: boolean }>`
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

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PostCard = styled.article<{ isSelected?: boolean }>`
  background: ${props => props.isSelected ? '#f8f9fa' : 'white'};
  border: 1px solid ${props => props.isSelected ? '#dee2e6' : '#e9ecef'};
  border-radius: 8px;
  margin-bottom: 16px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    border-color: #dee2e6;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PostContent = styled.div`
  padding: 16px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: flex-end;  // 우측 정렬
  margin-bottom: 12px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;  // 프로필과 글 사이 갭 추가
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const AuthorName = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #495057;
`;

export const AuthorTitle = styled.span`
  font-size: 12px;
  color: #868e96;
`;

export const PostText = styled.div`
  color: #495057;
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const PostActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid #e9ecef;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ActionButton = styled.button<{ isActive?: boolean; isMoreButton?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border: none;
  background: none;
  color: ${props => props.isActive ? '#228be6' : '#868e96'};
  cursor: pointer;
  font-size: 12px;
  ${props => props.isMoreButton && `
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  `}

  &:hover {
    color: #228be6;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
`;

export const Category = styled.span`
  background: #e9ecef;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #495057;
  font-weight: 500;
  display: inline-block;
`;

export const SubCategory = styled.span`
  background: #f1f3f5;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #868e96;
  display: inline-block;
`;

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-right: 0;
`;

// 상세 컴포넌트 전용 스타일
export const DetailMoreButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #868e96;
`;

export const DetailCategoryWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const DetailCategory = styled.div`
  background: #e9ecef;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  color: #495057;
  font-weight: 500;
`;

export const DetailSubCategory = styled.div`
  background: #f1f3f5;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  color: #868e96;
`;

export const DetailProfileSection = styled.div`
  display: flex;
  align-items: center;  // flex-start에서 center로 변경
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 24px;
`;

export const DetailProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DetailProfileBasic = styled.div`
  display: flex;
  align-items: center;  // flex-start에서 center로 변경
  gap: 12px;
`;

export const DetailAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DetailProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DetailProfileName = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #495057;
`;

export const DetailProfileTitle = styled.div`
  font-size: 13px;
  color: #868e96;
  line-height: 1.4;
`;

export const DetailMetaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

export const DetailPublishInfo = styled.div`
  font-size: 13px;
  color: #868e96;
`;

export const DetailStats = styled.div`
  display: flex;
  gap: 16px;
`;

export const DetailStatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #495057;
  font-size: 13px;

  svg {
    color: #868e96;
  }
`;

export const DetailText = styled.div`
  font-size: 15px;
  line-height: 1.6;
  color: #495057;
  white-space: pre-wrap;
`;

export const DetailContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;  // 스크롤이 DetailContent에만 적용되도록
`;

export const DetailHeader = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 16px;
  margin-bottom: 16px;
  position: relative;  // ActionButton 위치 기준점
`;

export const DetailContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;  // 스크롤바 여백

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #dee2e6;
    border-radius: 3px;
  }
`;

export const DetailFollowSection = styled.div`
  margin-bottom: 24px;
`;

export const DetailFollowButton = styled.button`
  padding: 8px 24px;
  background: white;
  border: 1px solid #adb5bd;
  border-radius: 4px;
  color: #495057;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: auto;

  &:hover {
    background: #f8f9fa;
    border-color: #868e96;
  }
`;

// 리뷰 관련 스타일 컴포넌트 추가
export const ReviewSection = styled.div`
  margin-top: 32px;
  border-top: 1px solid #e9ecef;
  padding-top: 24px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;  // 가로 스크롤 제거
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ReviewTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #495057;
`;

export const ReviewSortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: none;
  background: none;
  color: #868e96;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: #495057;
  }
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const ReviewAuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ReviewAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ReviewAuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ReviewAuthorName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #495057;
`;

export const ReviewAuthorTitle = styled.div`
  font-size: 12px;
  color: #868e96;
`;

export const ReviewDate = styled.div`
  font-size: 12px;
  color: #adb5bd;
  margin-left: auto;
`;

export const ReviewContent = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #495057;
  padding-left: 44px;
`;

export const ReviewActions = styled.div`
  display: flex;
  gap: 16px;
  padding-left: 44px;
`;

export const ReviewInput = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  width: 100%;
  box-sizing: border-box;
`;

export const ReviewTextField = styled.textarea`
  width: 100%;
  min-width: 0;
  height: 38px;
  padding: 8px 12px;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  resize: none;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  box-sizing: border-box;
  overflow: hidden;  // 스크롤 제거

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    outline: none;
    border-color: #868e96;
  }
`;

// 답글 관련 스타일 컴포넌트 추가
export const ReplyInput = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 44px;
  margin-top: 12px;
  width: 100%;
  box-sizing: border-box;
`;

export const ReplyInputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;  // flex item 오버플로우 방지
`;

export const ReplyTextField = styled.textarea`
  width: 100%;
  min-width: 0;
  height: 38px;
  padding: 8px 12px;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  resize: none;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  box-sizing: border-box;
  overflow: hidden;  // 스크롤 제거

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    outline: none;
    border-color: #868e96;
  }
`;

export const ReplyButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const ReplyButton = styled.button<{ primary?: boolean }>`
  padding: 6px 12px;
  border: 1px solid ${props => props.primary ? '#228be6' : '#dee2e6'};
  border-radius: 4px;
  background: ${props => props.primary ? '#228be6' : 'white'};
  color: ${props => props.primary ? 'white' : '#495057'};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.primary ? '#1c7ed6' : '#f8f9fa'};
  }
`;

// EmptyMessage 스타일 컴포넌트 추가
export const EmptyMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #868e96;
  font-size: 14px;
`;