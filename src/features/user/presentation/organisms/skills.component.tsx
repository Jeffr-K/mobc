import { useState } from 'react';
import { Code2, Heart, Plus, Star, X } from 'lucide-react';
import styled from 'styled-components';
import { Modal } from '../atoms/modal.component';
import { useSkills } from '../../core/hooks/profile.hooks';
import { CreateSkillRequest, SkillCategory } from '../../core/model/profile.model';

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border: 1px solid black;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AddButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border: none;
  border-radius: 0.5rem;
  color: #4b5563;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e5e7eb;
    color: #111827;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.div`
  position: relative;
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  border-radius: 1rem;
  font-size: 0.75rem;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const DeleteButton = styled.button`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fee2e2;
  border: none;
  border-radius: 50%;
  color: #ef4444;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s;

  ${Tag}:hover & {
    opacity: 1;
  }

  &:hover {
    background: #fecaca;
  }
`;

const ModalContent = styled.div`
  padding: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${({ variant = 'primary' }) => 
    variant === 'primary' 
      ? `
        background-color: #3b82f6;
        color: white;
        &:hover {
          background-color: #2563eb;
        }
      `
      : `
        background-color: #f3f4f6;
        color: #374151;
        &:hover {
          background-color: #e5e7eb;
        }
      `
  }
`;

const categoryIcons = {
  '프론트엔드': <Star size={14} />,
  '백엔드': <Code2 size={14} />,
  'DevOps': <Code2 size={14} />,
  '관심사': <Heart size={14} />
};

const ErrorMessage = styled.div`
  padding: 1rem;
  background: #fee2e2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
  font-size: 0.875rem;
  text-align: center;
`;

const LoadingMessage = styled.div`
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  text-align: center;
`;

export function ProfileSkills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSkill, setNewSkill] = useState<CreateSkillRequest>({
    category: '프론트엔드',
    name: ''
  });

  const { skills, isLoading, error, createSkill, deleteSkill } = useSkills();

  const handleAddSkill = () => {
    setIsModalOpen(true);
  };

  const handleDeleteSkill = (id: string) => {
    deleteSkill(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createSkill(newSkill);
    setIsModalOpen(false);
    setNewSkill({ category: '프론트엔드', name: '' });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNewSkill({ category: '프론트엔드', name: '' });
  };

  if (isLoading) return (
    <Card>
      <LoadingMessage>기술 스택을 불러오는 중...</LoadingMessage>
    </Card>
  );
  
  if (error) return (
    <Card>
      <ErrorMessage>
        기술 스택을 불러오는데 실패했습니다.
        <br />
        잠시 후 다시 시도해주세요.
      </ErrorMessage>
    </Card>
  );

  const skillsByCategory = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof skills>);

  return (
    <Card>
      <Header>
        <Title>
          <Code2 size={18} />
          기술 스택
        </Title>
        <AddButton onClick={handleAddSkill}>
          <Plus size={16} />
        </AddButton>
      </Header>

      {Object.entries(skillsByCategory || {}).map(([category, categorySkills]) => (
        <CategorySection key={category}>
          <CategoryTitle>
            {categoryIcons[category as SkillCategory]}
            {category}
          </CategoryTitle>
          <TagList>
            {categorySkills.map((skill) => (
              <Tag key={skill.id}>
                {skill.name}
                <DeleteButton onClick={() => handleDeleteSkill(skill.id)}>
                  <X size={10} />
                </DeleteButton>
              </Tag>
            ))}
          </TagList>
        </CategorySection>
      ))}

      <Modal isOpen={isModalOpen} onClose={handleCancel} title="새 기술 추가">
        <ModalContent>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>카테고리</Label>
              <Select
                value={newSkill.category}
                onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value as SkillCategory })}
                required
              >
                <option value="프론트엔드">프론트엔드</option>
                <option value="백엔드">백엔드</option>
                <option value="DevOps">DevOps</option>
                <option value="관심사">관심사</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>기술 이름</Label>
              <Input
                type="text"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                required
              />
            </FormGroup>
            <ButtonGroup>
              <Button type="button" variant="secondary" onClick={handleCancel}>
                취소
              </Button>
              <Button type="submit">
                추가하기
              </Button>
            </ButtonGroup>
          </Form>
        </ModalContent>
      </Modal>
    </Card>
  );
} 