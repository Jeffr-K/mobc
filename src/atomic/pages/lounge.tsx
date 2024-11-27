import React, { useState } from 'react';

import { Heart, MessageCircle, MoreHorizontal, Share2 } from 'lucide-react';
import styled from 'styled-components';

import { LoungeLayout } from '@/atomic/templates/@layout/@lounge';

export function LoungePage() {
  return (
    <LoungeLayout>
      <PostFeed />
    </LoungeLayout>
  );
}

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  images?: string[];
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const PostCard = styled.article`
  background: white;
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: ${props => props.theme.spacing.md};
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const AuthorTitle = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const PostContent = styled.div`
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  white-space: pre-wrap;
`;

const PostImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.sm};
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const ActionButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm};
  border: none;
  background: none;
  color: ${props =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.text.secondary};
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius.sm};

  &:hover {
    background: ${props => props.theme.colors.gray100};
  }
`;

const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      name: '홍길동',
      avatar: 'https://via.placeholder.com/48',
      title: '소프트웨어 엔지니어 @ Tech Company',
    },
    content: '오늘은 새로운 프로젝트를 시작했습니다. React와 TypeScript를 사용하여 멋진 애플리케이션을 만들 예정입니다. 많은 관심 부탁드립니다! 👨‍💻✨',
    timestamp: '2시간 전',
    likes: 42,
    comments: 5,
    shares: 2,
    images: ['https://via.placeholder.com/400x300'],
  },
  {
    id: '2',
    author: {
      name: '김영희',
      avatar: 'https://via.placeholder.com/48',
      title: 'UX Designer @ Design Studio',
    },
    content: '사용자 경험을 개선하기 위한 새로운 디자인 시스템을 구축 중입니다. 일관성 있는 UI/UX를 제공하는 것이 얼마나 중요한지 다시 한 번 느끼고 있네요.',
    timestamp: '4시간 전',
    likes: 28,
    comments: 3,
    shares: 1,
  },
];

export function PostFeed() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)));
  };

  return (
    <FeedContainer>
      {posts.map(post => (
        <PostCard key={post.id}>
          <PostHeader>
            <AuthorInfo>
              <Avatar src={post.author.avatar} alt={post.author.name} />
              <AuthorMeta>
                <AuthorName>{post.author.name}</AuthorName>
                <AuthorTitle>{post.author.title}</AuthorTitle>
              </AuthorMeta>
            </AuthorInfo>
            <ActionButton>
              <MoreHorizontal size={20} />
            </ActionButton>
          </PostHeader>

          <PostContent>{post.content}</PostContent>

          {post.images && post.images.length > 0 && (
            <PostImages>
              {post.images.map((image, index) => (
                <PostImage key={index} src={image} alt="Post content" />
              ))}
            </PostImages>
          )}

          <PostActions>
            <ActionButton onClick={() => handleLike(post.id)}>
              <Heart size={20} />
              <span>{post.likes}</span>
            </ActionButton>
            <ActionButton>
              <MessageCircle size={20} />
              <span>{post.comments}</span>
            </ActionButton>
            <ActionButton>
              <Share2 size={20} />
              <span>{post.shares}</span>
            </ActionButton>
          </PostActions>
        </PostCard>
      ))}
    </FeedContainer>
  );
}
