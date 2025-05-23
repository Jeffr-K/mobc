import { useState } from 'react';
import { BookOpen, Plus, X } from 'lucide-react';
import styled from 'styled-components';
import { Modal } from '../atoms/modal.component';
import { useBlogPosts } from '../../core/hooks/profile.hooks';
import { CreateBlogPostRequest } from '../../core/model/profile.model';

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

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const PostItem = styled.div`
  position: relative;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
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

  ${PostItem}:hover & {
    opacity: 1;
  }

  &:hover {
    background: #fecaca;
  }
`;

const PostTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const PostDate = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
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

export function ProfileBlog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState<CreateBlogPostRequest>({
    title: '',
    url: ''
  });

  const { blogPosts, isLoading, error, createBlogPost, deleteBlogPost } = useBlogPosts();

  const handleAddPost = () => {
    setIsModalOpen(true);
  };

  const handleDeletePost = (id: string) => {
    deleteBlogPost(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createBlogPost(newPost);
    setIsModalOpen(false);
    setNewPost({ title: '', url: '' });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNewPost({ title: '', url: '' });
  };

  if (isLoading) return (
    <Card>
      <LoadingMessage>블로그 포스트를 불러오는 중...</LoadingMessage>
    </Card>
  );
  
  if (error) return (
    <Card>
      <ErrorMessage>
        블로그 포스트를 불러오는데 실패했습니다.
        <br />
        잠시 후 다시 시도해주세요.
      </ErrorMessage>
    </Card>
  );

  return (
    <Card>
      <Header>
        <Title>
          <BookOpen size={18} />
          블로그
        </Title>
        <AddButton onClick={handleAddPost}>
          <Plus size={16} />
        </AddButton>
      </Header>
      <PostList>
        {blogPosts?.map((post) => (
          <PostItem key={post.id}>
            <DeleteButton onClick={() => handleDeletePost(post.id)}>
              <X size={14} />
            </DeleteButton>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.createdAt}</PostDate>
          </PostItem>
        ))}
      </PostList>

      <Modal isOpen={isModalOpen} onClose={handleCancel} title="새 블로그 포스트 추가">
        <ModalContent>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>제목</Label>
              <Input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>URL</Label>
              <Input
                type="url"
                value={newPost.url}
                onChange={(e) => setNewPost({ ...newPost, url: e.target.value })}
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