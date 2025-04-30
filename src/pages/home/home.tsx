import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  gap: 24px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;
  justify-content: center;
  align-items: start;
`;

const LeftSidebar = styled.aside`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const MainContent = styled.main`
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
`;

const RightSidebar = styled.aside`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: fit-content;
  margin-bottom: 24px;
`;

const Advertisement = styled.div`
  width: 100%;
  position: relative;
  padding-top: 150%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HotCompanies = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #333;
  }
`;

const CompanyItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  &:last-child { border: none; }
  
  h3 {
    font-size: 16px;
    color: #444;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 14px;
    color: #666;
  }

  .rank {
    font-size: 12px;
    font-weight: bold;
    color: #666;
    margin-right: 12px;
    min-width: 40px;
  }

  .company-info {
    flex: 1;
  }

  .rank-change {
    font-size: 14px;
    color: #666;
    margin-left: 8px;
  }
`;

const Footer = styled.footer`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  color: #666;
  line-height: 1.5;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 25%;
  overflow: hidden;
  margin-bottom: 32px;
  border-radius: 12px;
  border: 1px solid black;
`;

const BannerSlide = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;

const BannerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 1;
  border-radius: 50%;
  font-size: 18px;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &:first-child {
    left: 20px;
  }

  &:last-child {
    right: 20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 32px auto 0;
  max-width: 100%;
  border: 1px solid black;
`;

const BoardCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid black;
  position: relative;
`;

const BoardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const BoardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const ViewAllText = styled.a`
  color: #666;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ViewAllLink = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 40px;
  background: #fff;
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  border-top: 1px solid #000;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  
  &:hover {
    background: #f8f8f8;
  }
`;

const IssueItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  &:last-child { border: none; }
`;

const QnAItem = styled(IssueItem)``;
const JobItem = styled(IssueItem)`
  display: flex;
  align-items: center;
  gap: 12px;

  .rank {
    font-size: 14px;
    color: #888;
    min-width: 24px;
  }
`;
const GroupItem = styled(IssueItem)``;

const ItemTitle = styled.h3`
  font-size: 16px;
  color: #444;
  margin-bottom: 8px;
`;

const ItemMeta = styled.div`
  font-size: 14px;
  color: #666;
`;

const NewUsersContainer = styled.div`
  width: 100%;
  margin: 32px auto 0;
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border: 1px solid black;
  position: relative;
`;

const NewUsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin: 0 auto;
`;

const UserProfile = styled.div`
  padding: 20px;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 12px;
    border: 3px solid #f0f0f0;
  }

  h3 {
    font-size: 16px;
    color: #333;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
  }
`;

const PeopleYouMayKnowContainer = styled.div`
  width: 100%;
  margin: 32px auto 0;
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  padding-bottom: 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border: 1px solid black;
  position: relative;
`;

const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
  margin: 0 auto;
`;

const PersonProfile = styled.div`
  padding: 16px;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 8px;
    border: 2px solid #f0f0f0;
  }

  h3 {
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
  }

  p {
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;
  }

  .button-container {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  background: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 12px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
  flex: 1;
  
  &:hover {
    background: #f8f8f8;
  }
`;

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerImages = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <HomeLeftSidebar />
      <MainContent>
        <BannerContainer>
          {bannerImages.map((image, index) => (
            <BannerSlide key={index} active={currentSlide === index}>
              <BannerImage src={image} alt={`배너 ${index + 1}`} />
            </BannerSlide>
          ))}
          <SlideButton onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)}>
            ←
          </SlideButton>
          <SlideButton onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerImages.length)}>
            →
          </SlideButton>
        </BannerContainer>

        <GridContainer>
          <BoardCard>
            <BoardTitleContainer>
              <BoardTitle>인기 Q&A</BoardTitle>
              <ViewAllText>전체보기</ViewAllText>
            </BoardTitleContainer>
            <QnAItem>
              <ItemTitle>React 상태관리 라이브러리 추천해주세요</ItemTitle>
              <ItemMeta>답변 15 • 조회 234</ItemMeta>
            </QnAItem>
            <QnAItem>
              <ItemTitle>TypeScript 시작하기 좋은 방법이 있을까요?</ItemTitle>
              <ItemMeta>답변 12 • 조회 198</ItemMeta>
            </QnAItem>
            <QnAItem>
              <ItemTitle>Next.js vs React - 어떤 것을 배워야 할까요?</ItemTitle>
              <ItemMeta>답변 20 • 조회 312</ItemMeta>
            </QnAItem>
            <QnAItem>
              <ItemTitle>프론트엔드 개발자 포트폴리오 필수 항목</ItemTitle>
              <ItemMeta>답변 18 • 조회 287</ItemMeta>
            </QnAItem>
            <QnAItem>
              <ItemTitle>CSS-in-JS vs CSS 모듈 장단점</ItemTitle>
              <ItemMeta>답변 10 • 조회 156</ItemMeta>
            </QnAItem>
          </BoardCard>

          <BoardCard>
            <BoardTitleContainer>
              <BoardTitle>추천 채용</BoardTitle>
              <ViewAllText>전체보기</ViewAllText>
            </BoardTitleContainer>
            <JobItem>
              <span className="rank">1</span>
              <div>
                <ItemTitle>시니어 프론트엔드 개발자 (React)</ItemTitle>
                <ItemMeta>네이버 • 연봉 6000+</ItemMeta>
              </div>
            </JobItem>
            <JobItem>
              <span className="rank">2</span>
              <div>
                <ItemTitle>백엔드 개발자 (Node.js)</ItemTitle>
                <ItemMeta>카카오 • 연봉 5500+</ItemMeta>
              </div>
            </JobItem>
            <JobItem>
              <span className="rank">3</span>
              <div>
                <ItemTitle>프론트엔드 개발자 (Vue.js)</ItemTitle>
                <ItemMeta>라인 • 연봉 5000+</ItemMeta>
              </div>
            </JobItem>
            <JobItem>
              <span className="rank">4</span>
              <div>
                <ItemTitle>풀스택 개발자 (React/Node.js)</ItemTitle>
                <ItemMeta>쿠팡 • 연봉 5800+</ItemMeta>
              </div>
            </JobItem>
            <JobItem>
              <span className="rank">5</span>
              <div>
                <ItemTitle>주니어 프론트엔드 개발자</ItemTitle>
                <ItemMeta>토스 • 연봉 4500+</ItemMeta>
              </div>
            </JobItem>
          </BoardCard>
        </GridContainer>

        <NewUsersContainer>
          <BoardTitleContainer>
            <BoardTitle>새로 가입한 개발자</BoardTitle>
            <ViewAllText>전체보기</ViewAllText>
          </BoardTitleContainer>
          <NewUsersGrid>
            <UserProfile>
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="프로필" />
              <h3>김개발</h3>
              <p>프론트엔드 개발자</p>
            </UserProfile>
            <UserProfile>
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="프로필" />
              <h3>이코딩</h3>
              <p>백엔드 개발자</p>
            </UserProfile>
            <UserProfile>
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="프로필" />
              <h3>박디자인</h3>
              <p>UI/UX 디자이너</p>
            </UserProfile>
          </NewUsersGrid>
        </NewUsersContainer>

        <GridContainer>
          <BoardCard>
            <BoardTitleContainer>
              <BoardTitle>인기 클럽</BoardTitle>
              <ViewAllText>전체보기</ViewAllText>
            </BoardTitleContainer>
            {[
              { name: "프론트엔드 개발자 모임", members: 1200 },
              { name: "알고리즘 스터디", members: 890 },
              { name: "React 전문가 그룹", members: 750 },
              { name: "신입 개발자 모임", members: 680 },
              { name: "코딩테스트 준비방", members: 550 }
            ].map((club, index) => (
              <GroupItem key={index}>
                <ItemTitle>{`${index + 1}. ${club.name}`}</ItemTitle>
                <ItemMeta>멤버 {club.members}명</ItemMeta>
              </GroupItem>
            ))}
          </BoardCard>

          <BoardCard>
            <BoardTitleContainer>
              <BoardTitle>인기 게시물</BoardTitle>
              <ViewAllText>전체보기</ViewAllText>
            </BoardTitleContainer>
            {[
              { title: "주니어 개발자 이직 성공기", views: 2340 },
              { title: "프론트엔드 개발자 로드맵", views: 1980 },
              { title: "개발자 연봉 인상 팁", views: 1750 },
              { title: "코딩테스트 합격 후기", views: 1520 },
              { title: "개발자 포트폴리오 작성법", views: 1340 }
            ].map((post, index) => (
              <IssueItem key={index}>
                <ItemTitle>{`${index + 1}. ${post.title}`}</ItemTitle>
                <ItemMeta>조회수 {post.views}</ItemMeta>
              </IssueItem>
            ))}
          </BoardCard>
        </GridContainer>

        <PeopleYouMayKnowContainer>
          <BoardTitleContainer>
            <BoardTitle>알만한 사람들</BoardTitle>
          </BoardTitleContainer>
          <PeopleGrid>
            {Array.from({ length: 16 }).map((_, index) => (
              <PersonProfile key={index}>
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="프로필" />
                <h3>{`개발자${index + 1}`}</h3>
                <p>프론트엔드 개발자</p>
                <div className="button-container">
                  <ActionButton>팔로우</ActionButton>
                  <ActionButton>메시지</ActionButton>
                </div>
              </PersonProfile>
            ))}
          </PeopleGrid>
          <ViewAllLink>전체보기</ViewAllLink>
        </PeopleYouMayKnowContainer>
      </MainContent>
      <RightSidebar>
        <HotCompanies>
          <h2>실시간 인기 회사</h2>
          {[
            { name: "네이버", rankChange: "up" },
            { name: "카카오", rankChange: "down" },
            { name: "라인", rankChange: "same" },
            { name: "쿠팡", rankChange: "up" },
            { name: "토스", rankChange: "down" }
          ].map((company, index) => (
            <CompanyItem key={index}>
              <span className="rank">{index + 1}</span>
              <div className="company-info">
                <h3>{company.name}</h3>
              </div>
              <span className="rank-change">
                {(() => {
                  switch (company.rankChange) {
                    case 'up':
                      return '↑';
                    case 'down':
                      return '↓';
                    default:
                      return '-';
                  }
                })()}
              </span>
            </CompanyItem>
          ))}
        </HotCompanies>
        <Footer>
          <p>상호명: (주)개발자 커뮤니티</p>
          <p>대표: 홍길동</p>
          <p>사업자등록번호: 123-45-67890</p>
          <p>주소: 서울특별시 강남구 테헤란로 123</p>
          <p>이메일: contact@devcom.kr</p>
          <p>© 2024 Mob</p>
        </Footer>
      </RightSidebar>
      <RightSidebar>
        <Advertisement>
          <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="개발자 채용 광고" />
        </Advertisement>
      </RightSidebar>
    </Container>
  );
}

export function HomeLeftSidebar() {
  return (
    <LeftSidebar>
      <Advertisement>
        <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="개발자 채용 광고" />
      </Advertisement>
    </LeftSidebar>
  );
}

export function HomeRightSidebar() {
  const hotCompanies = [
    { name: "네이버", rankChange: "up" },
    { name: "카카오", rankChange: "down" },
    { name: "라인", rankChange: "same" },
    { name: "쿠팡", rankChange: "up" },
    { name: "토스", rankChange: "down" }
  ];

  const getRankChangeIcon = (change: string) => {
    switch (change) {
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      default:
        return '-';
    }
  };

  return (
    <RightSidebar>
      <HotCompanies>
        <h2>실시간 인기 회사</h2>
        {hotCompanies.map((company, index) => (
          <CompanyItem key={index}>
            <span className="rank">{index + 1}</span>
            <div className="company-info">
              <h3>{company.name}</h3>
            </div>
            <span className="rank-change">{getRankChangeIcon(company.rankChange)}</span>
          </CompanyItem>
        ))}
      </HotCompanies>
      <Footer>
        <p>상호명: (주)개발자 커뮤니티</p>
        <p>대표: 홍길동</p>
        <p>사업자등록번호: 123-45-67890</p>
        <p>주소: 서울특별시 강남구 테헤란로 123</p>
        <p>이메일: contact@devcom.kr</p>
        <p>© 2024 Mob</p>
      </Footer>
      <Advertisement>
        <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="개발자 채용 광고" />
      </Advertisement>
    </RightSidebar>
  );
}
