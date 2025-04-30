import { GlobalLayout } from '@/shared/common/layout/global-layout';
import React, { useState } from 'react';
import styled from 'styled-components';

const OrganizationWrapper = styled.div`
  width: ${GlobalLayout.page.width};
  max-width: ${GlobalLayout.page.maxWidth};
  margin: 0 auto;
`;

const Header = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const CoverImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  padding: 24px;
  margin-top: -48px;
  align-items: flex-start;
`;

const Logo = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #e0e0e0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const BasicInfo = styled.div`
  flex: 1;
  margin-left: 24px;
  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  p {
    color: #666;
    margin: 4px 0;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FollowButton = styled(Button)`
  background-color: #0a66c2;
  color: white;
  border: none;
  &:hover {
    background-color: #004182;
  }
`;

const WebsiteButton = styled(Button)`
  background-color: white;
  color: #0a66c2;
  border: 1px solid #0a66c2;
  &:hover {
    background-color: rgba(10, 102, 194, 0.1);
  }
`;

const Nav = styled.nav`
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 16px 24px;
    cursor: pointer;
    position: relative;
    transition: color 0.3s;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #0a66c2;
      transform: scaleX(0);
      transition: transform 0.3s;
    }
    
    &.active {
      color: #0a66c2;
      &::after {
        transform: scaleX(1);
      }
    }
    &:hover {
      color: #0a66c2;
    }
  }
`;

interface ContentProps {
  $activeTab: string;
}

const Content = styled.div<ContentProps>`
  display: grid;
  grid-template-columns: ${props => {
    if (props.$activeTab === '채용') return '1fr 3fr 6fr';
    if (props.$activeTab === '소개') return '3fr 6fr 3fr';
    return '2fr 6fr 2fr';
  }};
  gap: 24px;
`;

const MainContent = styled.div`
  section {
    background: white;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 24px;
    margin-bottom: 24px;
  }
`;

const Sidebar = styled.aside`
  div {
    background: white;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 24px;
    margin-bottom: 24px;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 24px;
`;

const JobSidebar = styled(Sidebar)`
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 12px;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }
    &.active {
      background-color: #e8f0fe;
      color: #0a66c2;
    }
  }
`;

const JobList = styled.div`
  .job-card {
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 16px;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const JobDetail = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding: 24px;
`;

const IntroContent = styled.div`
  width: 100%;
`;

const EmployeeCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
`;

const EmployeeCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  .profile-image {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #f5f5f5;
    overflow: hidden;
    margin-bottom: 8px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .info {
    text-align: center;
    
    h3 {
      font-weight: 600;
      margin-bottom: 4px;
      font-size: 14px;
    }
    
    p {
      color: #666;
      font-size: 12px;
      margin: 2px 0;
    }
  }
`;

const EmployeeList = styled.div`
  padding: 24px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

const PostList = styled.div`
  .post-card {
    padding: 24px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 16px;
    background: white;
  }
`;

const TagFilter = styled(Sidebar)`
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 8px 12px;
    margin: 4px 0;
    cursor: pointer;
    border-radius: 16px;
    &:hover {
      background-color: #f5f5f5;
    }
    &.active {
      background-color: #e8f0fe;
      color: #0a66c2;
    }
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .image {
    width: 100%;
    height: 200px;
    background-color: #f5f5f5;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .content {
    padding: 20px;
    
    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    p {
      color: #666;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 16px;
    }
    
    .tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      
      span {
        background-color: #f0f0f0;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        color: #666;
      }
    }
  }
`;

const ProductDetailSection = styled.section`
  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 24px;
  }
  
  .features {
    margin: 24px 0;
    
    h3 {
      font-size: 18px;
      margin-bottom: 12px;
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        padding: 8px 0;
        display: flex;
        align-items: center;
        gap: 8px;
        
        &:before {
          content: "•";
          color: #0a66c2;
        }
      }
    }
  }
`;

export function Organization(): React.ReactElement {
  const [activeTab, setActiveTab] = useState('홈');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeTab) {
      case '직원':
        return (
          <>
            <Sidebar>
              <div>
                <h3>직원 필터</h3>
                <ul>
                  <li>전체</li>
                  <li>개발</li>
                  <li>디자인</li>
                  <li>마케팅</li>
                  <li>영업</li>
                </ul>
              </div>
            </Sidebar>

            <EmployeeList>
              <EmployeeCardGrid>
                <EmployeeCard>
                  <div className="profile-image">
                    <img src="/employee1.jpg" alt="직원 프로필" />
                  </div>
                  <div className="info">
                    <h3>홍길동</h3>
                    <p>프론트엔드 개발자</p>
                    <p>개발팀</p>
                  </div>
                </EmployeeCard>
                <EmployeeCard>
                  <div className="profile-image">
                    <img src="/employee2.jpg" alt="직원 프로필" />
                  </div>
                  <div className="info">
                    <h3>김철수</h3>
                    <p>UI/UX 디자이너</p>
                    <p>디자인팀</p>
                  </div>
                </EmployeeCard>
                <EmployeeCard>
                  <div className="profile-image">
                    <img src="/employee3.jpg" alt="직원 프로필" />
                  </div>
                  <div className="info">
                    <h3>이영희</h3>
                    <p>마케팅 매니저</p>
                    <p>마케팅팀</p>
                  </div>
                </EmployeeCard>
              </EmployeeCardGrid>
            </EmployeeList>

            <Sidebar>
              <div>
                <h3>부서 정보</h3>
                <ul>
                  <li>개발팀: 15명</li>
                  <li>디자인팀: 8명</li>
                  <li>마케팅팀: 10명</li>
                  <li>영업팀: 12명</li>
                </ul>
              </div>
            </Sidebar>
          </>
        );
      case '채용':
        return (
          <>
            <JobSidebar>
              <div>
                <h3>직무 카테고리</h3>
                <ul>
                  <li className="active">개발</li>
                  <li>디자인</li>
                  <li>마케팅</li>
                  <li>영업</li>
                  <li>경영지원</li>
                </ul>
              </div>
            </JobSidebar>

            <JobList>
              <div className="job-card" onClick={() => setSelectedJob('frontend')}>
                <h3>프론트엔드 개발자</h3>
                <p>경력 3년 이상</p>
                <p>서울 · 정규직</p>
              </div>
              <div className="job-card" onClick={() => setSelectedJob('backend')}>
                <h3>백엔드 개발자</h3>
                <p>경력 5년 이상</p>
                <p>서울 · 정규직</p>
              </div>
            </JobList>

            <JobDetail>
              {selectedJob ? (
                <>
                  <h2>채용 상세</h2>
                  <div>
                    <h3>자격요건</h3>
                    <ul>
                      <li>관련 경력 3년 이상</li>
                      <li>React, TypeScript 능숙자</li>
                    </ul>
                    <h3>주요업무</h3>
                    <ul>
                      <li>웹 서비스 개발 및 운영</li>
                      <li>프론트엔드 아키텍처 설계</li>
                    </ul>
                  </div>
                </>
              ) : (
                <p>채용 공고를 선택해주세요</p>
              )}
            </JobDetail>
          </>
        );
      case '소개':
        return (
          <>
            <Sidebar>
              <div>
                <h3>회사 연혁</h3>
                <ul>
                  <li>2023년: 회사 설립</li>
                  <li>2023년: 시리즈 A 투자 유치</li>
                  <li>2024년: 해외 지사 설립</li>
                </ul>
              </div>
              <div>
                <h3>주요 성과</h3>
                <ul>
                  <li>매출 100억 달성</li>
                  <li>특허 10건 등록</li>
                  <li>고객사 1000개 돌파</li>
                </ul>
              </div>
            </Sidebar>
            <MainContent>
              <section>
                <h2>회사 소개</h2>
                <p>회사에 대한 자세한 소개글이 들어갑니다.</p>
                <p>회사의 미션과 비전, 핵심 가치 등이 포함됩니다.</p>
                <p>회사의 주요 제품과 서비스에 대한 설명이 들어갑니다.</p>
              </section>
              <section>
                <h2>근무 위치</h2>
                <MapContainer>
                  {/* 여기에 지도 컴포넌트가 들어갑니다 */}
                </MapContainer>
                <p style={{ marginTop: '16px' }}>서울특별시 강남구 테헤란로 123</p>
              </section>
            </MainContent>
            <Sidebar>
              <div>
                <h3>인증 및 수상</h3>
                <ul>
                  <li>벤처기업 인증</li>
                  <li>이노비즈 인증</li>
                  <li>우수기업 표창</li>
                </ul>
              </div>
              <div>
                <h3>제휴사</h3>
                <ul>
                  <li>삼성전자</li>
                  <li>네이버</li>
                  <li>카카오</li>
                </ul>
              </div>
            </Sidebar>
          </>
        );
      case '게시물':
        return (
          <>
            <TagFilter>
              <div>
                <h3>태그 필터</h3>
                <ul>
                  <li className="active">전체</li>
                  <li>회사소식</li>
                  <li>채용</li>
                  <li>문화</li>
                  <li>기술</li>
                  <li>이벤트</li>
                </ul>
              </div>
            </TagFilter>

            <PostList>
              <div className="post-card">
                <h3>2024년 신입 개발자 채용</h3>
                <p>작성일: 2024.01.15</p>
                <p>우리 회사에서 신입 개발자를 모집합니다...</p>
              </div>
              <div className="post-card">
                <h3>연말 송년회 현장</h3>
                <p>작성일: 2023.12.31</p>
                <p>즐거웠던 연말 송년회 현장을 공유합니다...</p>
              </div>
            </PostList>
          </>
        );
      case '제품':
        return (
          <>
            <Sidebar>
              <div>
                <h3>제품 카테고리</h3>
                <ul>
                  <li className="active">전체</li>
                  <li>SaaS</li>
                  <li>모바일 앱</li>
                  <li>개발자 도구</li>
                </ul>
              </div>
              <div>
                <h3>기술 스택</h3>
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>AWS</li>
                </ul>
              </div>
            </Sidebar>

            <MainContent>
              {selectedProduct ? (
                <ProductDetailSection>
                  <h2>AI 기반 데이터 분석 플랫폼</h2>
                  <div className="description">
                    <p>
                      빅데이터와 AI를 활용하여 기업의 데이터를 분석하고 
                      인사이트를 도출하는 올인원 분석 플랫폼입니다.
                    </p>
                  </div>
                  <div className="features">
                    <h3>주요 기능</h3>
                    <ul>
                      <li>실시간 데이터 수집 및 처리</li>
                      <li>AI 기반 예측 분석</li>
                      <li>맞춤형 대시보드 제작</li>
                      <li>자동화된 리포트 생성</li>
                    </ul>
                  </div>
                  <Button onClick={() => setSelectedProduct(null)}>
                    목록으로 돌아가기
                  </Button>
                </ProductDetailSection>
              ) : (
                <ProductGrid>
                  <ProductCard onClick={() => setSelectedProduct('analytics')}>
                    <div className="image">
                      <img src="/product1.jpg" alt="AI 분석 플랫폼" />
                    </div>
                    <div className="content">
                      <h3>AI 기반 데이터 분석 플랫폼</h3>
                      <p>
                        기업의 데이터를 AI로 분석하여 인사이트를 도출하는 
                        올인원 분석 솔루션
                      </p>
                      <div className="tags">
                        <span>AI</span>
                        <span>빅데이터</span>
                        <span>분석</span>
                      </div>
                    </div>
                  </ProductCard>
                  <ProductCard onClick={() => setSelectedProduct('automation')}>
                    <div className="image">
                      <img src="/product2.jpg" alt="업무 자동화 도구" />
                    </div>
                    <div className="content">
                      <h3>업무 자동화 솔루션</h3>
                      <p>
                        반복적인 업무를 자동화하여 업무 효율성을 
                        극대화하는 자동화 도구
                      </p>
                      <div className="tags">
                        <span>자동화</span>
                        <span>생산성</span>
                        <span>워크플로우</span>
                      </div>
                    </div>
                  </ProductCard>
                  <ProductCard onClick={() => setSelectedProduct('security')}>
                    <div className="image">
                      <img src="/product3.jpg" alt="보안 솔루션" />
                    </div>
                    <div className="content">
                      <h3>엔터프라이즈 보안 솔루션</h3>
                      <p>
                        기업의 데이터를 안전하게 보호하는 
                        종합 보안 솔루션
                      </p>
                      <div className="tags">
                        <span>보안</span>
                        <span>암호화</span>
                        <span>컴플라이언스</span>
                      </div>
                    </div>
                  </ProductCard>
                </ProductGrid>
              )}
            </MainContent>
          </>
        );
      default:
        return (
          <>
            <Sidebar>
              <div>
                <h3>회사 정보</h3>
                <ul>
                  <li>설립연도: 2023년</li>
                  <li>규모: 중소기업</li>
                  <li>산업: IT</li>
                  <li>매출: 비공개</li>
                </ul>
              </div>
            </Sidebar>

            <MainContent>
              <section>
                <h2>회사 소개</h2>
                <p>회사에 대한 간단한 소개글이 들어갑니다.</p>
              </section>

              <section>
                <h2>최근 소식</h2>
                <div className="update-cards">
                  {/* 회사 소식, 채용공고, 뉴스 등이 카드 형태로 표시됩니다 */}
                </div>
              </section>
            </MainContent>

            <Sidebar>
              <div>
                <h3>비슷한 기업</h3>
                {/* 유사 기업 목록이 표시됩니다 */}
              </div>
            </Sidebar>
          </>
        );
    }
  };

  return (
    <OrganizationWrapper>
      <Header>
        <CoverImage>
          <img src="/company-cover.jpg" alt="회사 커버 이미지" />
        </CoverImage>
        
        <ProfileSection>
          <Logo>
            <img src="/company-logo.png" alt="회사 로고" />
          </Logo>
          <BasicInfo>
            <h1>회사명</h1>
            <p>산업군 · 업종</p>
            <p>회사 위치</p>
            <p>직원 수</p>
            <p>팔로워 수</p>
          </BasicInfo>
          <ActionButtons>
            <FollowButton>팔로우</FollowButton>
            <WebsiteButton>웹사이트 방문</WebsiteButton>
          </ActionButtons>
        </ProfileSection>
      </Header>

      <Nav>
        <ul>
          <li 
            className={activeTab === '홈' ? 'active' : ''} 
            onClick={() => setActiveTab('홈')}
          >
            홈
          </li>
          <li 
            className={activeTab === '소개' ? 'active' : ''} 
            onClick={() => setActiveTab('소개')}
          >
            소개
          </li>
          <li 
            className={activeTab === '채용' ? 'active' : ''} 
            onClick={() => setActiveTab('채용')}
          >
            채용
          </li>
          <li 
            className={activeTab === '직원' ? 'active' : ''} 
            onClick={() => setActiveTab('직원')}
          >
            직원
          </li>
          <li 
            className={activeTab === '게시물' ? 'active' : ''} 
            onClick={() => setActiveTab('게시물')}
          >
            게시물
          </li>
          <li 
            className={activeTab === '제품' ? 'active' : ''} 
            onClick={() => setActiveTab('제품')}
          >
            제품
          </li>
        </ul>
      </Nav>

      <Content $activeTab={activeTab}>
        {renderContent()}
      </Content>
    </OrganizationWrapper>
  );
}