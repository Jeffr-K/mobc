import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, MessageSquare, ThumbsUp, Eye, ArrowRight } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  content: string;
  type: 'post' | 'comment' | 'like' | 'view';
  createdAt: string;
  url: string;
}

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border: 1px solid black;
  margin-bottom: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const ViewAllButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  border: none;
  border-radius: 0.5rem;
  color: #4b5563;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e5e7eb;
  }

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const ActivityCard = styled.div`
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const ActivityTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ActivityContent = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ActivityFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'post':
      return <MessageSquare size={14} />;
    case 'comment':
      return <MessageSquare size={14} />;
    case 'like':
      return <ThumbsUp size={14} />;
    case 'view':
      return <Eye size={14} />;
  }
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export function ProfileActivity() {
  const navigate = useNavigate();
  const [activities] = useState<Activity[]>([
    {
      id: '1',
      title: 'React Query 사용 시 주의해야 할 점들',
      content: 'React Query를 사용하면서 겪었던 문제점들과 해결 방법을 공유합니다...',
      type: 'post',
      createdAt: '2024-03-15',
      url: '/lounge/posts/1'
    },
    {
      id: '2',
      title: 'TypeScript로 API 응답 타입 정의하기',
      content: 'API 응답을 타입 안전하게 처리하는 방법을 알아봅시다...',
      type: 'post',
      createdAt: '2024-03-14',
      url: '/lounge/posts/2'
    },
    // ... 더 많은 활동 데이터
  ]);

  const handleViewAll = () => {
    navigate('/lounge/activities');
  };

  const handleActivityClick = (url: string) => {
    navigate(url);
  };

  return (
    <Card>
      <Header>
        <Title>활동 내역</Title>
        <ViewAllButton to="/profile/activities">
          전체 보기
          <ArrowRight size={16} />
        </ViewAllButton>
      </Header>
      <Content>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} onClick={() => handleActivityClick(activity.url)}>
            <ActivityTitle>{activity.title}</ActivityTitle>
            <ActivityContent>{activity.content}</ActivityContent>
            <ActivityFooter>
              <IconWrapper>
                {getActivityIcon(activity.type)}
                <span>{activity.type === 'post' ? '게시글' : 
                       activity.type === 'comment' ? '댓글' :
                       activity.type === 'like' ? '좋아요' : '조회'}</span>
              </IconWrapper>
              <IconWrapper>
                <Calendar size={14} />
                <span>{formatDate(activity.createdAt)}</span>
              </IconWrapper>
            </ActivityFooter>
          </ActivityCard>
        ))}
      </Content>
    </Card>
  );
}