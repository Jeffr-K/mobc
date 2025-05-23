import { useState } from 'react';
import styled from 'styled-components';
import { Plus, Pencil, Trash2, Building2, Users, MapPin, Calendar } from 'lucide-react';
import { Modal } from '../atoms/modal.component';

interface Experience {
  id: string;
  companyName: string;
  companyLogo: string;
  companyArea: string;
  team: string;
  role: string;
  summary: string;
  description: string;
  period: [string, string];
  location: string;
}

const Container = styled.div`
  
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  
  &:hover {
    background: #2563eb;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-top: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #3b82f6;
    border: 2px solid white;
  }
`;

const ExperienceCard = styled.div`
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  background: white;
  margin-bottom: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const CompanyInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

const CompanyLogo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const CompanyDetails = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const Role = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
`;

const Period = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
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

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
`;

// Form Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
`;

const DateRange = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #2563eb;
  }
`;

export function ProfileExperience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [experiences] = useState<Experience[]>([
    {
      id: '1',
      companyName: '테크 컴퍼니',
      companyLogo: 'https://i.pravatar.cc/48?img=6',
      companyArea: 'IT 서비스',
      team: '프론트엔드 개발팀',
      role: '시니어 프론트엔드 개발자',
      summary: 'React와 TypeScript를 사용한 웹 애플리케이션 개발',
      description: '주요 프로젝트: 대규모 커머스 플랫폼 리뉴얼, 실시간 데이터 시각화 대시보드 개발',
      period: ['2022-01', '2024-03'],
      location: '서울 강남구'
    },
    // ... 더 많은 경력 데이터
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출로 경력 추가
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header>
        <Title>경력 사항</Title>
        <AddButton onClick={() => setIsModalOpen(true)}>
          <Plus size={16} />
          경력 추가
        </AddButton>
      </Header>
      <Timeline>
        {experiences.map((experience) => (
          <TimelineItem key={experience.id}>
            <ExperienceCard>
              <CompanyHeader>
                <CompanyInfo>
                  <CompanyLogo src={experience.companyLogo} alt={experience.companyName} />
                  <CompanyDetails>
                    <CompanyName>{experience.companyName}</CompanyName>
                    <Role>{experience.role}</Role>
                    <Period>
                      {new Date(experience.period[0]).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' })} - 
                      {new Date(experience.period[1]).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' })}
                    </Period>
                  </CompanyDetails>
                </CompanyInfo>
                <Actions>
                  <ActionButton>
                    <Pencil size={16} />
                  </ActionButton>
                  <ActionButton>
                    <Trash2 size={16} />
                  </ActionButton>
                </Actions>
              </CompanyHeader>
              <InfoGrid>
                <InfoItem>
                  <Building2 size={16} />
                  <span>{experience.companyArea}</span>
                </InfoItem>
                <InfoItem>
                  <Users size={16} />
                  <span>{experience.team}</span>
                </InfoItem>
                <InfoItem>
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </InfoItem>
                <InfoItem>
                  <Calendar size={16} />
                  <span>{experience.period[0]} - {experience.period[1]}</span>
                </InfoItem>
              </InfoGrid>
              <Description>{experience.description}</Description>
            </ExperienceCard>
          </TimelineItem>
        ))}
      </Timeline>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="경력 추가">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>회사명</Label>
            <Input name="companyName" required />
          </FormGroup>
          <FormGroup>
            <Label>회사 로고 URL</Label>
            <Input name="companyLogo" type="url" required />
          </FormGroup>
          <FormGroup>
            <Label>회사 분야</Label>
            <Input name="companyArea" required />
          </FormGroup>
          <FormGroup>
            <Label>팀</Label>
            <Input name="team" required />
          </FormGroup>
          <FormGroup>
            <Label>직무</Label>
            <Input name="role" required />
          </FormGroup>
          <FormGroup>
            <Label>요약</Label>
            <Input name="summary" required />
          </FormGroup>
          <FormGroup>
            <Label>상세 설명</Label>
            <TextArea name="description" required />
          </FormGroup>
          <FormGroup>
            <Label>근무 기간</Label>
            <DateRange>
              <Input name="startDate" type="month" required />
              <Input name="endDate" type="month" required />
            </DateRange>
          </FormGroup>
          <FormGroup>
            <Label>근무지</Label>
            <Input name="location" required />
          </FormGroup>
          <SubmitButton type="submit">저장</SubmitButton>
        </Form>
      </Modal>
    </Container>
  );
}
