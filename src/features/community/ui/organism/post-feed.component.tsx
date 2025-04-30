import { Bookmark, Eye, Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { ActionButton, AuthorInfo, AuthorMeta, AuthorName, AuthorTitle, Avatar, Category, CategoryWrapper, FeedContainer, PostActions, PostCard, PostContent, PostHeader, PostText, SubCategory } from "../x/styles";

export function PostFeed({
  feeds,
  selectedFeedId,
  onFeedSelect
}: {
  feeds: any;
  selectedFeedId: number | null;
  onFeedSelect: (id: number) => void;
}) {
  if (!feeds || !Array.isArray(feeds)) {
    return null;
  }

  return (
    <FeedContainer>
      {feeds.map((feed: any) => (
        <PostCard
          key={feed._id || feed.id}
          isSelected={feed.id === selectedFeedId}
          onClick={() => onFeedSelect(feed.id)}
        >
          <PostContent>
            <PostHeader>
              <ActionButton isMoreButton>
                <MoreHorizontal size={16} />
              </ActionButton>
            </PostHeader>
            <CategoryWrapper>
              <Category>{feed.category}</Category>
              <SubCategory>{feed.subCategory}</SubCategory>
            </CategoryWrapper>
            <AuthorInfo>
              <Avatar
                src={feed.author?.avatar || 'https://via.placeholder.com/32'}
                alt={feed.author?.name || 'User'}
              />
              <AuthorMeta>
                <AuthorName>{feed.author?.name || 'Anonymous'}</AuthorName>
                <AuthorTitle>
                  {feed.author?.title}
                  <span style={{ margin: '0 4px' }}>·</span>
                  {feed.author?.shortDescription}
                </AuthorTitle>
              </AuthorMeta>
            </AuthorInfo>
            <PostText>{feed.content}</PostText>
            <PostActions>
              <ActionButton>
                <Eye size={14} />
                <span>{feed.views}</span>
              </ActionButton>
              <ActionButton>
                <Heart size={14} />
                <span>{feed.likes}</span>
              </ActionButton>
              <ActionButton>
                <MessageCircle size={14} />
                <span>{feed.comments}</span>
              </ActionButton>
              <ActionButton>
                <Bookmark size={14} />
              </ActionButton>
            </PostActions>
          </PostContent>
        </PostCard>
      ))}
    </FeedContainer>
  );
}