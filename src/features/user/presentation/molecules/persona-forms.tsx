import styled from 'styled-components';
import { Persona } from '../../core/model/profile.model';

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

interface ProfileFormProps {
  data: Persona['personal'];
  onSubmit: (data: Persona['personal']) => void;
}

export function ProfileForm({ data, onSubmit }: ProfileFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit({
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      job: formData.get('job') as string,
      personality: formData.get('personality') as string,
      interests: (formData.get('interests') as string).split(',').map(s => s.trim()),
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>이름</Label>
        <Input name="name" defaultValue={data.name} maxLength={50} required />
      </FormGroup>
      <FormGroup>
        <Label>소개</Label>
        <TextArea name="description" defaultValue={data.description} maxLength={200} required />
      </FormGroup>
      <FormGroup>
        <Label>직무</Label>
        <Input name="job" defaultValue={data.job} maxLength={50} required />
      </FormGroup>
      <FormGroup>
        <Label>성격</Label>
        <Input name="personality" defaultValue={data.personality} maxLength={50} required />
      </FormGroup>
      <FormGroup>
        <Label>관심사 (쉼표로 구분)</Label>
        <Input name="interests" defaultValue={data.interests.join(', ')} maxLength={100} required />
      </FormGroup>
      <SubmitButton type="submit">저장</SubmitButton>
    </Form>
  );
}

interface LocationFormProps {
  data: Persona['location'];
  onSubmit: (data: Persona['location']) => void;
}

export function LocationForm({ data, onSubmit }: LocationFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit({
      address: formData.get('address') as string,
      education: formData.get('education') as string,
      experience: formData.get('experience') as string,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>활동 지역</Label>
        <Input name="address" defaultValue={data.address} maxLength={100} required />
      </FormGroup>
      <FormGroup>
        <Label>학력</Label>
        <Input name="education" defaultValue={data.education} maxLength={100} required />
      </FormGroup>
      <FormGroup>
        <Label>경력</Label>
        <Input name="experience" defaultValue={data.experience} maxLength={100} required />
      </FormGroup>
      <SubmitButton type="submit">저장</SubmitButton>
    </Form>
  );
}

interface TechStackFormProps {
  data: Persona['identity'];
  onSubmit: (data: Persona['identity']) => void;
}

export function TechStackForm({ data, onSubmit }: TechStackFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit({
      frontend: formData.get('frontend') as string,
      backend: formData.get('backend') as string,
      tools: formData.get('tools') as string,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>프론트엔드</Label>
        <Input name="frontend" defaultValue={data.frontend} maxLength={100} required />
      </FormGroup>
      <FormGroup>
        <Label>백엔드</Label>
        <Input name="backend" defaultValue={data.backend} maxLength={100} required />
      </FormGroup>
      <FormGroup>
        <Label>개발 도구</Label>
        <Input name="tools" defaultValue={data.tools} maxLength={100} required />
      </FormGroup>
      <SubmitButton type="submit">저장</SubmitButton>
    </Form>
  );
}

interface ContactFormProps {
  data: Persona['contact'];
  onSubmit: (data: Persona['contact']) => void;
}

export function ContactForm({ data, onSubmit }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit({
      email: formData.get('email') as string,
      github: formData.get('github') as string,
      blog: formData.get('blog') as string,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>이메일</Label>
        <Input name="email" type="email" defaultValue={data.email} maxLength={100} required />
      </FormGroup>
      <FormGroup>
        <Label>GitHub</Label>
        <Input name="github" defaultValue={data.github} maxLength={100} required />
      </FormGroup>
      <FormGroup>
        <Label>블로그</Label>
        <Input name="blog" defaultValue={data.blog} maxLength={100} required />
      </FormGroup>
      <SubmitButton type="submit">저장</SubmitButton>
    </Form>
  );
} 