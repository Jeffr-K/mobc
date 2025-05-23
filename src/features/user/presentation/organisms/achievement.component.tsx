import styled from 'styled-components';
import { Trophy, Star, Target, Zap } from 'lucide-react';

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid black;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AchievementList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

const AchievementItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    transform: translateY(-2px);
  }
`;

const AchievementIcon = styled.div<{ color: string }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: ${props => props.color}15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`;

const AchievementName = styled.h4`
  font-size: 0.75rem;
  font-weight: 500;
  color: #111827;
  text-align: center;
`;

const AchievementValue = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #4b5563;
`;

export function ProfileAchievement() {
  const achievements = [
    {
      id: '1',
      name: '컨트리뷰션',
      value: '1,234',
      icon: <Trophy size={20} />,
      color: '#f59e0b'
    },
    {
      id: '2',
      name: '스타',
      value: '56',
      icon: <Star size={20} />,
      color: '#3b82f6'
    },
    {
      id: '3',
      name: '목표 달성',
      value: '89%',
      icon: <Target size={20} />,
      color: '#10b981'
    },
    {
      id: '4',
      name: '스트릭',
      value: '7일',
      icon: <Zap size={20} />,
      color: '#ef4444'
    }
  ];

  return (
    <Card>
      <Title>
        <Trophy size={18} />
        업적
      </Title>
      <AchievementList>
        {achievements.map((achievement) => (
          <AchievementItem key={achievement.id}>
            <AchievementIcon color={achievement.color}>
              {achievement.icon}
            </AchievementIcon>
            <AchievementName>{achievement.name}</AchievementName>
            <AchievementValue>{achievement.value}</AchievementValue>
          </AchievementItem>
        ))}
      </AchievementList>
    </Card>
  );
} 