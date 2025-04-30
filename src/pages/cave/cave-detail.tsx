import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FaBookmark, FaHeart, FaCog, FaBell, FaUserCog, FaEdit, FaComments, FaQuestionCircle, FaEye, FaUsers } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  background: #fff;
`;

const Sidebar = styled.div`
  width: 240px;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
`;

const LeftSidebar = styled(Sidebar)`
  padding: 24px 0;
  background: none;
`;

const RightSidebar = styled.aside`
  width: 280px;
  height: calc(100vh - 84px);
  position: sticky;
  top: 84px;
  overflow-y: auto;
  padding: 24px;
  background: white;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dee2e6;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f8f9fa;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 24px;
  background: #fff;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.section`
  margin-bottom: 32px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
`;

const CategoryPath = styled.div`
  margin-bottom: 8px;
  font-size: 13px;
  color: #868e96;
`;

const CategoryLink = styled.span`
  cursor: pointer;
  &:hover {
    color: #495057;
    text-decoration: underline;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #212529;
  letter-spacing: -0.5px;
  text-shadow: 0 0 20px rgba(51, 154, 240, 0.2);
`;

const OpenTag = styled.span`
  background: linear-gradient(135deg, #51cf66 0%, #37b24d 100%);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 0 10px rgba(81, 207, 102, 0.3);
`;

const HeaderButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #868e96;
  font-size: 20px;
  padding: 4px;
  position: relative;
  
  &:hover {
    color: #339af0;
    text-shadow: 0 0 10px rgba(51, 154, 240, 0.5);
  }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 8px 0;
  min-width: 200px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;
  margin-top: 8px;
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #495057;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f3f5;
    color: #339af0;
  }

  svg {
    font-size: 16px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const SubTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
  color: #495057;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: -0.3px;
  text-shadow: 0 0 15px rgba(51, 154, 240, 0.15);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Bookmark = styled.li`
  padding: 12px 24px;
  color: #495057;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  background: ${props => props.color || 'rgba(255, 248, 230, 0.8)'};
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  backdrop-filter: blur(5px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -8px;
    width: 16px;
    height: 100%;
    background: inherit;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 50% 50%);
  }

  &:nth-child(1) { background: linear-gradient(135deg, rgba(255, 248, 230, 0.9) 0%, rgba(255, 236, 179, 0.9) 100%); }
  &:nth-child(2) { background: linear-gradient(135deg, rgba(231, 245, 255, 0.9) 0%, rgba(179, 229, 252, 0.9) 100%); }
  &:nth-child(3) { background: linear-gradient(135deg, rgba(243, 240, 255, 0.9) 0%, rgba(224, 216, 255, 0.9) 100%); }
  &:nth-child(4) { background: linear-gradient(135deg, rgba(235, 251, 238, 0.9) 0%, rgba(200, 250, 205, 0.9) 100%); }
  &:nth-child(5) { background: linear-gradient(135deg, rgba(255, 243, 191, 0.9) 0%, rgba(255, 236, 153, 0.9) 100%); }
  &:nth-child(6) { background: linear-gradient(135deg, rgba(255, 227, 227, 0.9) 0%, rgba(255, 201, 201, 0.9) 100%); }
  &:nth-child(7) { background: linear-gradient(135deg, rgba(229, 219, 255, 0.9) 0%, rgba(209, 196, 233, 0.9) 100%); }

  &:hover {
    transform: translateX(8px);
    box-shadow: 4px 4px 12px rgba(0,0,0,0.15);
  }

  &.active {
    color: #1971c2;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(25, 113, 194, 0.2);
  }
`;

const Calendar = styled.div`
  background: rgba(248, 249, 250, 0.8);
  padding: 20px;
  border-radius: 8px;
  min-height: 300px;
  color: #495057;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const CalendarDay = styled.div<{ isToday?: boolean; isSelected?: boolean }>`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  background: ${props => props.isSelected ? 'linear-gradient(135deg, #339af0 0%, #228be6 100%)' : props.isToday ? 'linear-gradient(135deg, #e7f5ff 0%, #d0ebff 100%)' : 'transparent'};
  color: ${props => props.isSelected ? '#fff' : props.isToday ? '#339af0' : '#495057'};
  font-weight: ${props => props.isToday || props.isSelected ? '600' : '400'};
  box-shadow: ${props => props.isSelected ? '0 0 10px rgba(51, 154, 240, 0.3)' : 'none'};

  &:hover {
    background: ${props => props.isSelected ? 'linear-gradient(135deg, #339af0 0%, #228be6 100%)' : 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)'};
  }
`;

const WeekDay = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868e96;
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 0 10px rgba(134, 142, 150, 0.2);
`;

const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  margin: 0 4px 4px 0;
  background: ${({ theme }) => theme.colors.gray50};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;

const Description = styled.p`
  color: #495057;
  line-height: 1.6;
  margin: 16px 0;
  font-size: 15px;
  letter-spacing: -0.3px;
  text-shadow: 0 0 15px rgba(73, 80, 87, 0.1);
`;

const MenuSection = styled.div`
  margin-bottom: 24px;
`;

const MenuItem = styled.div<{ isActive?: boolean }>`
  padding: 12px 24px;
  color: ${props => props.isActive ? '#1971C2' : '#495057'};
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${props => props.isActive ? 'linear-gradient(135deg, #E7F5FF 0%, #D0EBFF 100%)' : 'transparent'};
  transition: all 0.2s ease;
  border-radius: 6px;

  &:hover {
    background: ${props => props.isActive ? 'linear-gradient(135deg, #E7F5FF 0%, #D0EBFF 100%)' : 'linear-gradient(135deg, #f1f3f5 0%, #e9ecef 100%)'};
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const ContributionGraph = styled.div`
  background: rgba(248, 249, 250, 0.8);
  padding: 20px;
  border-radius: 8px;
  min-height: 200px;
  display: grid;
  grid-template-columns: repeat(52, 1fr);
  gap: 3px;
  backdrop-filter: blur(5px);
`;

const ContributionCell = styled.div<{ level: number }>`
  width: 10px;
  height: 10px;
  background: ${props => {
    switch(props.level) {
      case 0: return 'linear-gradient(135deg, #ebedf0 0%, #e1e4e8 100%)';
      case 1: return 'linear-gradient(135deg, #9be9a8 0%, #85e89d 100%)';
      case 2: return 'linear-gradient(135deg, #40c463 0%, #34d058 100%)';
      case 3: return 'linear-gradient(135deg, #30a14e 0%, #28a745 100%)';
      case 4: return 'linear-gradient(135deg, #216e39 0%, #1b9e34 100%)';
      default: return 'linear-gradient(135deg, #ebedf0 0%, #e1e4e8 100%)';
    }
  }};
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const ActivityCard = styled.div`
  background: rgba(248, 249, 250, 0.9);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
`;

const ActivityImage = styled.div`
  width: 100%;
  height: 140px;
  background-color: #e9ecef;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%);
  }
`;

const ActivityContent = styled.div`
  padding: 16px;
`;

const ActivityTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 8px;
  text-shadow: 0 0 15px rgba(33, 37, 41, 0.1);
`;

const ActivityDate = styled.p`
  font-size: 13px;
  color: #868e96;
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AddActivityButton = styled.button`
  padding: 8px 16px;
  background: linear-gradient(135deg, #339af0 0%, #228be6 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(51, 154, 240, 0.3);

  &:hover {
    background: linear-gradient(135deg, #1c7ed6 0%, #1971c2 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(51, 154, 240, 0.4);
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryTag = styled.div<{ isActive?: boolean }>`
  padding: 6px 16px;
  background: ${props => props.isActive ? 
    'linear-gradient(135deg, #339af0 0%, #228be6 100%)' : 
    'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)'};
  color: ${props => props.isActive ? 'white' : '#495057'};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  box-shadow: ${props => props.isActive ? 
    '0 2px 8px rgba(51, 154, 240, 0.3)' : 
    '0 2px 6px rgba(0,0,0,0.1)'};

  &:hover {
    background: ${props => props.isActive ? 
      'linear-gradient(135deg, #1c7ed6 0%, #1971c2 100%)' : 
      'linear-gradient(135deg, #dee2e6 0%, #ced4da 100%)'};
    transform: translateY(-1px);
    box-shadow: ${props => props.isActive ? 
      '0 4px 12px rgba(51, 154, 240, 0.4)' : 
      '0 4px 8px rgba(0,0,0,0.15)'};
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  padding: 0;
  margin-left: 0;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  }
`;

const EnterButton = styled(ActionButton)`
  background: linear-gradient(135deg, #339af0 0%, #228be6 100%);
  color: white;

  &:hover {
    background: linear-gradient(135deg, #1c7ed6 0%, #1971c2 100%);
  }
`;

const MeetingButton = styled(ActionButton)`
  background: linear-gradient(135deg, #51cf66 0%, #40c057 100%);
  color: white;

  &:hover {
    background: linear-gradient(135deg, #37b24d 0%, #2f9e44 100%);
  }
`;

const ChatButton = styled(ActionButton)`
  background: linear-gradient(135deg, #845ef7 0%, #7950f2 100%);
  color: white;

  &:hover {
    background: linear-gradient(135deg, #7048e8 0%, #6741d9 100%);
  }
`;

const InquiryButton = styled(ActionButton)`
  background: linear-gradient(135deg, #ff922b 0%, #fd7e14 100%);
  color: white;

  &:hover {
    background: linear-gradient(135deg, #f76707 0%, #e8590c 100%);
  }
`;

const NoticeItem = styled.li`
  padding: 12px 16px;
  border-bottom: 1px solid rgba(233, 236, 239, 0.8);
  color: #495057;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  transition: all 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateX(4px);
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  color: #868e96;
  
  svg {
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 20px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
    
    &:hover {
      color: #339af0;
      filter: drop-shadow(0 2px 6px rgba(51, 154, 240, 0.3));
      transform: translateY(-1px);
    }
  }
`;

const OnlineMember = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(241, 243, 245, 0.8);
    transform: translateX(4px);
  }
`;

const MemberAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e9ecef;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberInfo = styled.div`
  flex: 1;
`;

const MemberName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #495057;
  text-shadow: 0 0 10px rgba(73, 80, 87, 0.1);
`;

const MemberStatus = styled.div`
  font-size: 12px;
  color: #40c057;
  text-shadow: 0 0 10px rgba(64, 192, 87, 0.2);
`;

export function CaveDetailPage() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const activities = [
    { id: 1, title: "리액트 기초 학습", date: "2024.04.01", category: "학습", image: "/images/activities/react-basic.png" },
    { id: 2, title: "컴포넌트 설계", date: "2024.04.05", category: "설계", image: "/images/activities/component-design.png" },
    { id: 3, title: "상태관리 실습", date: "2024.04.10", category: "실습", image: "/images/activities/state-management.png" },
    { id: 4, title: "라우팅 구현", date: "2024.04.15", category: "개발", image: "/images/activities/routing.png" },
    { id: 5, title: "API 연동", date: "2024.04.20", category: "개발", image: "/images/activities/api-integration.png" },
    { id: 6, title: "성능 최적화", date: "2024.04.25", category: "최적화", image: "/images/activities/performance.png" },
    { id: 7, title: "테스트 코드 작성", date: "2024.04.30", category: "테스트", image: "/images/activities/testing.png" },
    { id: 8, title: "배포 자동화", date: "2024.05.05", category: "배포", image: "/images/activities/deployment.png" }
  ];

  const categories = Array.from(new Set(activities.map(activity => activity.category)));

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedDate);
    const firstDay = getFirstDayOfMonth(selectedDate);
    const days = [];
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

    weekDays.forEach(day => {
      days.push(<WeekDay key={`weekday-${day}`}>{day}</WeekDay>);
    });

    for (let i = 0; i < firstDay; i++) {
      days.push(<CalendarDay key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
      const isToday = date.toDateString() === new Date().toDateString();
      days.push(
        <CalendarDay 
          key={`day-${day}`}
          isToday={isToday}
          onClick={() => setSelectedDate(date)}
        >
          {day}
        </CalendarDay>
      );
    }

    return days;
  };

  return (
    <Container>
      <LeftSidebar>
        <List>
          <Bookmark className="active">🏠 홈</Bookmark>
          <Bookmark>📚 리소스</Bookmark>
          <Bookmark>📝 활동</Bookmark>
          <Bookmark>📅 일정</Bookmark>
          <Bookmark>💬 토론</Bookmark>
          <Bookmark>⚙️ 설정</Bookmark>
          <Bookmark>📖 방명록</Bookmark>
        </List>
      </LeftSidebar>

      <MainContent>
        <Section>
          <CategoryPath>
            <CategoryLink>스터디</CategoryLink> {' > '} <CategoryLink>프론트엔드</CategoryLink>
          </CategoryPath>
          <TitleContainer>
            <TitleWrapper>
              <Title>React 스터디 모임</Title>
              <OpenTag>Open</OpenTag>
            </TitleWrapper>
            <HeaderButtonGroup>
              <IconButton>
                <FaBookmark />
              </IconButton>
              <IconButton onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
                <FaCog />
              </IconButton>
              <DropdownMenu isOpen={isSettingsOpen}>
                <DropdownItem>
                  <FaEdit />
                  동굴 정보 수정
                </DropdownItem>
                <DropdownItem>
                  <FaUserCog />
                  멤버 관리
                </DropdownItem>
                <DropdownItem>
                  <FaBell />
                  알림 설정
                </DropdownItem>
                <DropdownItem>
                  <FaBookmark />
                  책갈피 등록하기
                </DropdownItem>
              </DropdownMenu>
            </HeaderButtonGroup>
          </TitleContainer>
          <StatsContainer>
            <StatItem>
              <FaUsers />
              <span>4/6</span>
            </StatItem>
            <StatItem>
              <FaHeart />
              <span>123</span>
            </StatItem>
            <StatItem>
              <FaEye />
              <span>1,234</span>
            </StatItem>
          </StatsContainer>
          <Description>주 2회 React 스터디원을 모집합니다</Description>
          <div style={{ marginTop: '16px' }}>
            <Tag>React</Tag>
            <Tag>Frontend</Tag>
            <Tag>JavaScript</Tag>
          </div>
          <ButtonContainer>
            <EnterButton>동굴로 입장하기</EnterButton>
            <MeetingButton>회의하기</MeetingButton>
            <ChatButton><FaComments /> 실시간 채팅</ChatButton>
            <InquiryButton><FaQuestionCircle /> 문의하기</InquiryButton>
          </ButtonContainer>
        </Section>

        <TwoColumnLayout>
          <Section>
            <SectionHeader>
              <SubTitle>공지사항</SubTitle>
              <AddActivityButton>공지사항 추가하기</AddActivityButton>
            </SectionHeader>
            <List>
              <NoticeItem>다음 스터디는 5월 1일 저녁 8시입니다</NoticeItem>
              <NoticeItem>스터디 자료는 자료실에 업로드 해주세요</NoticeItem>
              <NoticeItem>프로젝트 제출 기한은 5월 10일까지입니다</NoticeItem>
            </List>
          </Section>

          <Section>
            <SectionHeader>
              <SubTitle>일정</SubTitle>
              <AddActivityButton>일정 추가하기</AddActivityButton>
            </SectionHeader>
            <Calendar>
              <CalendarHeader>
                <h3>{selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월</h3>
              </CalendarHeader>
              <CalendarGrid>
                {renderCalendar()}
              </CalendarGrid>
            </Calendar>
          </Section>
        </TwoColumnLayout>

        <Section>
          <SubTitle>활동 기록</SubTitle>
          <ContributionGraph>
            {[...Array(364)].map((_, i) => (
              <ContributionCell key={i} level={Math.floor(Math.random() * 5)} />
            ))}
          </ContributionGraph>
        </Section>

        <Section>
          <ActivityHeader>
            <SubTitle>활동</SubTitle>
            <AddActivityButton>활동 추가하기</AddActivityButton>
          </ActivityHeader>
          <CategoryContainer>
            <CategoryTag isActive>전체</CategoryTag>
            {categories.map(category => (
              <CategoryTag key={category}>{category}</CategoryTag>
            ))}
          </CategoryContainer>
          <ActivityGrid>
            {activities.map(activity => (
              <ActivityCard key={activity.id}>
                <ActivityImage style={{ backgroundImage: `url(${activity.image})` }} />
                <ActivityContent>
                  <ActivityTitle>{activity.title}</ActivityTitle>
                  <ActivityDate>{activity.date}</ActivityDate>
                </ActivityContent>
              </ActivityCard>
            ))}
          </ActivityGrid>
        </Section>

        <Section>
          <SubTitle>커뮤니케이션</SubTitle>
          <MenuItem>자유 토론</MenuItem>
          <MenuItem>프로젝트</MenuItem>
          <MenuItem>일정 관리</MenuItem>
        </Section>
      </MainContent>

      <RightSidebar>
        <Section>
          <SubTitle>온라인 - 20</SubTitle>
          {[...Array(20)].map((_, index) => (
            <OnlineMember key={index}>
              <MemberAvatar>
                <img src={`/images/avatars/member${index}.png`} alt={`멤버 ${index + 1}`} />
              </MemberAvatar>
              <MemberInfo>
                <MemberName>
                  {index === 0 ? '김개발 (리더)' : `멤버 ${index + 1}`}
                </MemberName>
                <MemberStatus>온라인</MemberStatus>
              </MemberInfo>
            </OnlineMember>
          ))}
        </Section>
      </RightSidebar>
    </Container>
  );
}