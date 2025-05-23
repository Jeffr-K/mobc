import styled from 'styled-components';
import { Mountain, Users } from 'lucide-react';

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
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

const CaveList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CaveItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

const CaveIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b5563;
`;

const CaveInfo = styled.div`
  flex: 1;
`;

const CaveName = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const CaveStats = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

export function ProfileCave() {
  const caves = [
    {
      id: '1',
      name: '프론트엔드 동굴',
      members: 12,
      icon: <Mountain size={20} />
    },
    {
      id: '2',
      name: '백엔드 동굴',
      members: 8,
      icon: <Mountain size={20} />
    }
  ];

  return (
    <Card>
      <Title>
        <Mountain size={18} />
        참여 중인 동굴
      </Title>
      <CaveList>
        {caves.map((cave) => (
          <CaveItem key={cave.id}>
            <CaveIcon>{cave.icon}</CaveIcon>
            <CaveInfo>
              <CaveName>{cave.name}</CaveName>
              <CaveStats>
                <Users size={14} />
                {cave.members}명
              </CaveStats>
            </CaveInfo>
          </CaveItem>
        ))}
      </CaveList>
    </Card>
  );
} 