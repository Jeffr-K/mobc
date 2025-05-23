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
  PostTitle,
  SubCategory,
} from "../x/styles";
import { ReactElement } from "react";
import { Feed } from "@/features/lounge/infrastructure/model/feed.model";

export function Feeds({
  feeds,
  selectedFeedId,
  onFeedSelect,
}: Readonly<{
  feeds: Feed[];
  selectedFeedId: string | null;
  onFeedSelect: (uuid: string) => void;
}>): ReactElement {
  if (!feeds || !Array.isArray(feeds)) {
    return null;
  }

  return (
    <FeedContainer>
      {feeds.map((feed: Feed) => (
        <PostCard key={feed._id} isSelected={feed.identifier.uuid === selectedFeedId} onClick={() => onFeedSelect(feed.identifier.uuid)}>
          <PostContent>
            <PostHeader>
              <ActionButton isMoreButton>
                <MoreHorizontal size={16} />
              </ActionButton>
            </PostHeader>
            <CategoryWrapper>
              <Category>{feed.category?.name}</Category>
              <SubCategory key={feed.category?.parent?._id}>{feed.category?.parent?._id}</SubCategory>
            </CategoryWrapper>
            <AuthorInfo>
              <Avatar src={feed.author?.avatar ?? "https://i.pravatar.cc/32?img=8"} alt={feed.author?.username.username ?? "User"} />
              <AuthorMeta>
                <AuthorName>{feed.author?.username.nickname ?? "Anonymous"}</AuthorName>
                <AuthorTitle>
                  {feed.author?.title}
                  <span style={{ margin: "0 4px" }}>·</span>
                  {feed.author?.shortDescription}
                </AuthorTitle>
              </AuthorMeta>
            </AuthorInfo>
            <PostTitle>{feed.title}</PostTitle>
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
