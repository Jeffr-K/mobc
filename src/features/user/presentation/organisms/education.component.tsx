import { useState } from 'react';
import styled from 'styled-components';
import { Plus, Pencil, Trash2, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Modal } from '../atoms/modal.component';

interface Education {
  id: string;
  school: string;
  major: string;
  degree: string;
  status: '재학' | '휴학' | '졸업';
  period: [string, string];
  location: string;
  description: string;
}

const Container = styled.div`
  // margin-top 제거
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

const EducationList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const EducationCard = styled.div`
  padding: 1.5rem;
  border: 1px solid black;
  border-radius: 1rem;
  background: white;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const SchoolHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const SchoolInfo = styled.div`
  flex: 1;
`;

const SchoolName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const Major = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
`;

const Degree = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

const Status = styled.div<{ $status: '재학' | '휴학' | '졸업' }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${({ $status }) => 
    $status === '재학' ? '#dcfce7' :
    $status === '휴학' ? '#fef9c3' :
    '#dbeafe'
  };
  color: ${({ $status }) =>
    $status === '재학' ? '#166534' :
    $status === '휴학' ? '#854d0e' :
    '#1e40af'
  };
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

const Select = styled.select`
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

const EducationItem = styled.div<{ $status: '재학중' | '졸업' }>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ $status }) => $status === '재학중' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(107, 114, 128, 0.1)'};
  border: 1px solid ${({ $status }) => $status === '재학중' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(107, 114, 128, 0.2)'};
`;

export function ProfileEducation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [educations] = useState<Education[]>([
    {
      id: '1',
      school: '서울대학교',
      major: '컴퓨터공학과',
      degree: '학사',
      status: '졸업',
      period: ['2018-03', '2022-02'],
      location: '서울 관악구',
      description: '주요 수강 과목: 자료구조, 알고리즘, 운영체제, 컴퓨터 네트워크'
    },
    // ... 더 많은 학력 데이터
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출로 학력 추가
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header>
        <Title>학력 사항</Title>
        <AddButton onClick={() => setIsModalOpen(true)}>
          <Plus size={16} />
          학력 추가
        </AddButton>
      </Header>
      <EducationList>
        {educations.map((education) => (
          <EducationCard key={education.id}>
            <SchoolHeader>
              <SchoolInfo>
                <SchoolName>{education.school}</SchoolName>
                <Major>{education.major}</Major>
                <Degree>{education.degree}</Degree>
                <Status $status={education.status}>{education.status}</Status>
              </SchoolInfo>
              <Actions>
                <ActionButton>
                  <Pencil size={16} />
                </ActionButton>
                <ActionButton>
                  <Trash2 size={16} />
                </ActionButton>
              </Actions>
            </SchoolHeader>
            <InfoGrid>
              <InfoItem>
                <GraduationCap size={16} />
                <span>{education.major}</span>
              </InfoItem>
              <InfoItem>
                <Calendar size={16} />
                <span>{education.period[0]} - {education.period[1]}</span>
              </InfoItem>
              <InfoItem>
                <MapPin size={16} />
                <span>{education.location}</span>
              </InfoItem>
            </InfoGrid>
            <Description>{education.description}</Description>
          </EducationCard>
        ))}
      </EducationList>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="학력 추가">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>학교명</Label>
            <Input name="school" required />
          </FormGroup>
          <FormGroup>
            <Label>전공</Label>
            <Input name="major" required />
          </FormGroup>
          <FormGroup>
            <Label>학위</Label>
            <Select name="degree" required>
              <option value="학사">학사</option>
              <option value="석사">석사</option>
              <option value="박사">박사</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>상태</Label>
            <Select name="status" required>
              <option value="재학">재학</option>
              <option value="휴학">휴학</option>
              <option value="졸업">졸업</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>재학 기간</Label>
            <DateRange>
              <Input name="startDate" type="month" required />
              <Input name="endDate" type="month" required />
            </DateRange>
          </FormGroup>
          <FormGroup>
            <Label>위치</Label>
            <Input name="location" required />
          </FormGroup>
          <FormGroup>
            <Label>상세 설명</Label>
            <TextArea name="description" required />
          </FormGroup>
          <SubmitButton type="submit">저장</SubmitButton>
        </Form>
      </Modal>
    </Container>
  );
}
