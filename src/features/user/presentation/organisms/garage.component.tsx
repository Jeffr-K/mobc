import { useState } from 'react';
import styled from 'styled-components';
import { Plus, Pencil, Trash2, Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Modal } from '../atoms/modal.component';

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  githubUrl: string;
  demoUrl?: string;
  techStack: string[];
  stars: number;
  forks: number;
  period: [string, string];
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const Thumbnail = styled.div<{ src: string }>`
  height: 200px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Actions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ActionButton = styled.button`
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 0.375rem;
  color: #6b7280;
  cursor: pointer;
  
  &:hover {
    background: white;
    color: #111827;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  color: #4b5563;
  border-radius: 1rem;
  font-size: 0.75rem;
`;

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const Links = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const LinkButton = styled.a`
  padding: 0.5rem;
  color: #6b7280;
  border-radius: 0.375rem;
  
  &:hover {
    background: #f3f4f6;
    color: #111827;
  }
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

const TechStackInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  min-height: 3rem;
  
  &:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
`;

const TechInput = styled.input`
  border: none;
  outline: none;
  font-size: 0.875rem;
  flex: 1;
  min-width: 120px;
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

export function ProfileGarage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: '포트폴리오 웹사이트',
      description: 'React와 TypeScript를 사용한 개인 포트폴리오 웹사이트입니다.',
      thumbnail: 'https://i.pravatar.cc/400x200?img=7',
      githubUrl: 'https://github.com/username/portfolio',
      demoUrl: 'https://portfolio-demo.com',
      techStack: ['React', 'TypeScript', 'Styled Components'],
      stars: 42,
      forks: 12,
      period: ['2023-01', '2023-03']
    },
    // ... 더 많은 프로젝트 데이터
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출로 프로젝트 추가
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header>
        <Title>프로젝트 갤러리</Title>
        <AddButton onClick={() => setIsModalOpen(true)}>
          <Plus size={16} />
          프로젝트 추가
        </AddButton>
      </Header>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <Thumbnail src={project.thumbnail}>
              <Actions>
                <ActionButton>
                  <Pencil size={16} />
                </ActionButton>
                <ActionButton>
                  <Trash2 size={16} />
                </ActionButton>
              </Actions>
            </Thumbnail>
            <Content>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
              <TechStack>
                {project.techStack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectFooter>
                <Stats>
                  <Stat>
                    <Star size={16} />
                    {project.stars}
                  </Stat>
                  <Stat>
                    <GitFork size={16} />
                    {project.forks}
                  </Stat>
                </Stats>
                <Links>
                  <LinkButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                  </LinkButton>
                  {project.demoUrl && (
                    <LinkButton href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </LinkButton>
                  )}
                </Links>
              </ProjectFooter>
            </Content>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="프로젝트 추가">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>프로젝트명</Label>
            <Input name="title" required />
          </FormGroup>
          <FormGroup>
            <Label>설명</Label>
            <TextArea name="description" required />
          </FormGroup>
          <FormGroup>
            <Label>썸네일 URL</Label>
            <Input name="thumbnail" type="url" required />
          </FormGroup>
          <FormGroup>
            <Label>GitHub URL</Label>
            <Input name="githubUrl" type="url" required />
          </FormGroup>
          <FormGroup>
            <Label>데모 URL</Label>
            <Input name="demoUrl" type="url" />
          </FormGroup>
          <FormGroup>
            <Label>기술 스택</Label>
            <TechStackInput>
              <TechInput type="text" placeholder="기술을 입력하고 Enter를 누르세요" />
            </TechStackInput>
          </FormGroup>
          <FormGroup>
            <Label>개발 기간</Label>
            <DateRange>
              <Input name="startDate" type="month" required />
              <Input name="endDate" type="month" required />
            </DateRange>
          </FormGroup>
          <SubmitButton type="submit">저장</SubmitButton>
        </Form>
      </Modal>
    </Container>
  );
}
