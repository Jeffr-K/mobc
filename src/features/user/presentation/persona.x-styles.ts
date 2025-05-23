import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  padding: 1.5rem;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ProfileCard = styled(Card)``;
export const LocationCard = styled(Card)``;
export const TechStackCard = styled(Card)``;
export const ContactCard = styled(Card)``;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
`;

export const EditButton = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  border-radius: 0.375rem;
  
  &:hover {
    background: #f3f4f6;
    color: #111827;
  }
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const InfoIcon = styled.div`
  color: #6b7280;
`;

export const InfoContent = styled.div`
  flex: 1;
`;

export const InfoLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

export const InfoValue = styled.div`
  font-size: 0.875rem;
  color: #111827;
  font-weight: 500;
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  
  &:hover {
    color: #111827;
  }
`;