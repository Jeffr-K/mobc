import React from 'react';
import * as S from './styles';
import { Share2 } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { MoreHorizontal } from 'lucide-react';
import { Heart } from 'lucide-react';
import { useFeedsQueryHook } from '@/modules/lounge/feed/\bapi/hooks';

export function Feeds(): React.ReactElement {
  const { feeds, refetch } = useFeedsQueryHook({});
  console.log('feeds', feeds);

  // const {} = useFeedLikeMutationHook();
  // const {} = useFeedDeleteMutationHook();
  // const {} = useFeedRegisterMutationHook();
  // const {} = useFeedEditMutationHook();
  // const {} = useCommnetRegisterMutationHook();
  // const {} = useCommentEditMutationHook();
  // const {} = useCommentDeleteMutationHook();
  // const {} = useFeedShareMutationHook();

  const handleLikeClick = (feedId: string) => {
    console.log(`Like clicked for feed ${feedId}`);
  };

  return (
    <S.Container>
      {feeds.map((feed) => (
        <S.PostCard key={feed.id}>
          <S.PostHeader>
            <S.AuthorInfo>
              <S.Avatar src={feed.author.avatar} alt={feed.author.name} />
              <S.AuthorMeta>
                <S.AuthorName>{feed.author.name}</S.AuthorName>
                <S.AuthorTitle>{feed.author.title}</S.AuthorTitle>
              </S.AuthorMeta>
            </S.AuthorInfo>
            <S.ActionButton>
              <MoreHorizontal size={20} />
            </S.ActionButton>
          </S.PostHeader>

          <S.PostContent>{feed.content}</S.PostContent>

          {feed.images && feed.images.length > 0 && (
            <S.PostImages>
              {feed.images.map((image, index) => (
                <S.PostImage key={index} src={image} alt="Post content" />
              ))}
            </S.PostImages>
          )}

          <S.PostActions>
            <S.ActionButton onClick={() => handleLikeClick(feed.id)}>
              <Heart size={20} />
              <span>{feed.likes}</span>
            </S.ActionButton>
            <S.ActionButton>
              <MessageCircle size={20} />
              <span>{feed.comments}</span>
            </S.ActionButton>
            <S.ActionButton>
              <Share2 size={20} />
              <span>{feed.shares}</span>
            </S.ActionButton>
          </S.PostActions>
        </S.PostCard>
      ))}
    </S.Container>
  );
}
