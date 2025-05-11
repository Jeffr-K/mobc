import { Bookmark, Eye, Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import {
  ActionButton,
  AuthorInfo,
  AuthorMeta,
  AuthorName,
  AuthorTitle,
  Avatar,
  Category,
  CategoryWrapper,
  FeedContainer,
  PostActions,
  PostCard,
  PostContent,
  PostHeader,
  PostText,
  SubCategory,
} from "../x/styles";
import { ReactElement } from "react";
import { Feed } from "@/features/lounge/model/feed.model";

export function Feeds({
  feeds,
  selectedFeedId,
  onFeedSelect,
}: Readonly<{
  feeds: Feed[];
  selectedFeedId: number | null;
  onFeedSelect: (id: number) => void;
}>): ReactElement {
  if (!feeds || !Array.isArray(feeds)) {
    return null;
  }

  return (
    <FeedContainer>
      {feeds.map((feed: Feed) => (
        <PostCard key={feed._id} isSelected={feed._id === selectedFeedId} onClick={() => onFeedSelect(feed._id)}>
          <PostContent>
            <PostHeader>
              <ActionButton isMoreButton>
                <MoreHorizontal size={16} />
              </ActionButton>
            </PostHeader>
            <CategoryWrapper>
              <Category>{feed.category.name}</Category>
              {Array.isArray(feed.category.subCategories) &&
                feed.category.subCategories.map(subCategory => <SubCategory key={subCategory._id}>{subCategory.name}</SubCategory>)}
            </CategoryWrapper>
            <AuthorInfo>
              <Avatar src={feed.author?.avatar ?? "https://via.placeholder.com/32"} alt={feed.author?.name ?? "User"} />
              <AuthorMeta>
                <AuthorName>{feed.author?.name ?? "Anonymous"}</AuthorName>
                <AuthorTitle>
                  {feed.author?.title}
                  <span style={{ margin: "0 4px" }}>·</span>
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
