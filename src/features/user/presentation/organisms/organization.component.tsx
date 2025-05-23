import styled from 'styled-components';
import { Building2, Users } from 'lucide-react';

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

const OrgList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const OrgItem = styled.div`
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

const OrgIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b5563;
`;

const OrgInfo = styled.div`
  flex: 1;
`;

const OrgName = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const OrgRole = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

export function ProfileOrganization() {
  const organizations = [
    {
      id: '1',
      name: 'Mob Company',
      role: 'Admin',
      icon: <Building2 size={20} />
    },
    {
      id: '2',
      name: 'Dev Community',
      role: 'Member',
      icon: <Users size={20} />
    }
  ];

  return (
    <Card>
      <Title>
        <Building2 size={18} />
        참여 중인 Organization
      </Title>
      <OrgList>
        {organizations.map((org) => (
          <OrgItem key={org.id}>
            <OrgIcon>{org.icon}</OrgIcon>
            <OrgInfo>
              <OrgName>{org.name}</OrgName>
              <OrgRole>{org.role}</OrgRole>
            </OrgInfo>
          </OrgItem>
        ))}
      </OrgList>
    </Card>
  );
} 