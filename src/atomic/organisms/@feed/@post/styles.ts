import styled from 'styled-components';

export const FeedGenerator = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const PostCard = styled.article`
  background: white;
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: ${props => props.theme.spacing.md};
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

export const AuthorTitle = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary};
`;

export const PostContent = styled.div`
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  white-space: pre-wrap;
`;

export const PostImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.sm};
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

export const ActionButton = styled.button<{ isActive?: boolean }>`
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