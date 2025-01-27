import React from 'react';

import { Heart, MessageCircle, MoreHorizontal, Share2 } from 'lucide-react';
import styled from 'styled-components';

import { LoungeLayout } from '@/atomic/template/@layout/@lounge';
import { useFeedsQueryHook } from '@/modules/lounge/feed/\bapi/hooks';

export function LoungePage(): React.ReactElement {
  const { feeds, isLoading, error } = useFeedsQueryHook({
    page: 0,
    size: 10,
    sort: 'createdAt:desc',
    limit: 10
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <LoungeLayout>
      <PostFeed feeds={feeds} />
    </LoungeLayout>
  );
}

export function PostFeed({ feeds }: { feeds: any }) {
  console.log('feeds', feeds);

  if (!feeds || !Array.isArray(feeds)) {
    return null;
  }

  return (
    <FeedContainer>
      {feeds.map((feed: any) => (
        <PostCard key={feed._id  || feed.id}>
          <PostHeader>
            <AuthorInfo>
              <Avatar 
                src={feed.author?.avatar || 'https://via.placeholder.com/48'} 
                alt={feed.author?.name || 'User'} 
              />
              <AuthorMeta>
                <AuthorName>{feed.author?.name || 'Anonymous'}</AuthorName>
                <AuthorTitle>{feed.author?.title || ''}</AuthorTitle>
              </AuthorMeta>
            </AuthorInfo>
            <ActionButton>
              <MoreHorizontal size={20} />
            </ActionButton>
          </PostHeader>

          <PostContent>{feed.content}</PostContent>

          {feed.images?.length > 0 && (
            <PostImages>
              {feed.images.map((image, index) => (
                <PostImage key={index} src={image.url} alt="Post content" />
              ))}
            </PostImages>
          )}

          <PostActions>
            <ActionButton>
              <Heart size={20} />
              <span>{feed.likes || 0}</span>
            </ActionButton>
            <ActionButton>
              <MessageCircle size={20} />
              <span>{feed.comments || 0}</span>
            </ActionButton>
            <ActionButton>
              <Share2 size={20} />
              <span>{feed.shares || 0}</span>
            </ActionButton>
          </PostActions>
        </PostCard>
      ))}
    </FeedContainer>
  );
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