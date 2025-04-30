// Spotlight/index.tsx
import * as S from './styles';

interface Post {
  id: number;
  title: string;
  views: number;
  likes: number;
  rank: number;
}

const topPosts: Post[] = [
  {
    id: 1,
    title: 'Clean Architecture with React and TypeScript',
    views: 1250,
    likes: 89,
    rank: 1
  },
  {
    id: 2,
    title: 'Building Scalable Backend Systems',
    views: 980,
    likes: 76,
    rank: 2
  },
];

export const Spotlight = () => {
  return (
    <S.Container>
      <S.Title>Spotlight</S.Title>
      <S.List>
        {topPosts.map((post) => (
          <S.PostItem key={post.id}>
            <S.Rank>{post.rank}</S.Rank>
            <S.Content>
              <S.PostTitle>{post.title}</S.PostTitle>
              <S.Stats>
                <S.Stat>👁️ {post.views}</S.Stat>
                <S.Stat>❤️ {post.likes}</S.Stat>
              </S.Stats>
            </S.Content>
          </S.PostItem>
        ))}
      </S.List>
    </S.Container>
  );
};