import { useState } from "react";
import {
  ActionButton,
  DetailAvatar,
  DetailCategory,
  DetailCategoryWrapper,
  DetailContainer,
  DetailContent,
  DetailFollowButton,
  DetailHeader,
  DetailMetaSection,
  DetailMoreButton,
  DetailProfileBasic,
  DetailProfileInfo,
  DetailProfileName,
  DetailProfileSection,
  DetailProfileTitle,
  DetailProfileWrapper,
  DetailPublishInfo,
  DetailStatItem,
  DetailStats,
  DetailSubCategory,
  DetailText,
  ReplyButton,
  ReplyButtonGroup,
  ReplyInput,
  ReplyInputWrapper,
  ReplyTextField,
  ReviewActions,
  ReviewAuthorInfo,
  ReviewAuthorMeta,
  ReviewAuthorName,
  ReviewAuthorTitle,
  ReviewAvatar,
  ReviewContent,
  ReviewDate,
  ReviewHeader,
  ReviewInput,
  ReviewItem,
  ReviewList,
  ReviewSection,
  ReviewSortButton,
  ReviewTextField,
  ReviewTitle,
} from "../x/styles";
import { Eye, Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";

export function Feed({ feed }: { feed: any }) {
  const [replyingTo, setReplyingTo] = useState<number | null>(null); // 답글 다는 댓글의 ID

  if (!feed) return null;

  const dummyReviews = [
    {
      id: 1,
      author: {
        name: "최리뷰",
        avatar: "https://avatars.githubusercontent.com/u/22334455",
        title: "시니어 개발자",
      },
      content: "Virtual Thread 성능 벤치마크 결과가 인상적이네요. 저희 팀에서도 검토해봐야겠습니다.",
      createdAt: "2024-01-15T10:30:00Z",
      likes: 8,
    },
    {
      id: 2,
      author: {
        name: "정댓글",
        avatar: "https://avatars.githubusercontent.com/u/33445566",
        title: "백엔드 개발자",
      },
      content: "좋은 인사이트 감사합니다. 혹시 관련해서 추가적인 레퍼런스 자료가 있을까요?",
      createdAt: "2024-01-15T11:15:00Z",
      likes: 3,
    },
  ];

  return (
    <DetailContainer>
      <DetailHeader>
        <DetailMoreButton>
          <MoreHorizontal size={16} />
        </DetailMoreButton>
        <DetailCategoryWrapper>
          <DetailCategory>{feed.category}</DetailCategory>
          <DetailSubCategory>{feed.subCategory}</DetailSubCategory>
        </DetailCategoryWrapper>
        <DetailProfileSection>
          <DetailProfileWrapper>
            <DetailProfileBasic>
              <DetailAvatar src={feed.author?.avatar} alt={feed.author?.name} />
              <DetailProfileInfo>
                <DetailProfileName>{feed.author?.name}</DetailProfileName>
                <DetailProfileTitle>
                  {feed.author?.title}
                  <span style={{ margin: "0 4px" }}>·</span>
                  {feed.author?.shortDescription}
                </DetailProfileTitle>
              </DetailProfileInfo>
            </DetailProfileBasic>
          </DetailProfileWrapper>
          <DetailFollowButton>Follow</DetailFollowButton>
        </DetailProfileSection>
        <DetailMetaSection>
          <DetailPublishInfo>published Jan 15, 2024, 09:30 AM</DetailPublishInfo>
          <DetailStats>
            <DetailStatItem>
              <Eye size={12} />
              <div>{feed.views} views</div>
            </DetailStatItem>
            <DetailStatItem>
              <Heart size={12} />
              <div>{feed.likes} likes</div>
            </DetailStatItem>
            <DetailStatItem>
              <MessageCircle size={12} />
              <div>{feed.comments} comments</div>
            </DetailStatItem>
          </DetailStats>
        </DetailMetaSection>
      </DetailHeader>

      <DetailContent>
        <DetailText>{feed.content}</DetailText>
        <ReviewSection>
          <ReviewHeader>
            <ReviewTitle>댓글 {dummyReviews.length}</ReviewTitle>
            <ReviewSortButton>
              최신순 <FaChevronDown size={10} />
            </ReviewSortButton>
          </ReviewHeader>
          <ReviewList>
            {dummyReviews.map(review => (
              <ReviewItem key={review.id}>
                <ReviewAuthorInfo>
                  <ReviewAvatar src={review.author.avatar} alt={review.author.name} />
                  <ReviewAuthorMeta>
                    <ReviewAuthorName>{review.author.name}</ReviewAuthorName>
                    <ReviewAuthorTitle>{review.author.title}</ReviewAuthorTitle>
                  </ReviewAuthorMeta>
                  <ReviewDate>{new Date(review.createdAt).toLocaleDateString()}</ReviewDate>
                </ReviewAuthorInfo>
                <ReviewContent>{review.content}</ReviewContent>
                <ReviewActions>
                  <ActionButton>
                    <Heart size={12} />
                    <span>{review.likes}</span>
                  </ActionButton>
                  <ActionButton onClick={() => setReplyingTo(review.id)}>
                    <MessageCircle size={12} />
                    <span>답글</span>
                  </ActionButton>
                </ReviewActions>
                {replyingTo === review.id && (
                  <ReplyInput>
                    <ReviewAvatar src="https://avatars.githubusercontent.com/u/12345678" alt="User" />
                    <ReplyInputWrapper>
                      <ReplyTextField placeholder="답글을 입력하세요..." autoFocus />
                      <ReplyButtonGroup>
                        <ReplyButton onClick={() => setReplyingTo(null)}>취소</ReplyButton>
                        <ReplyButton primary>답글 작성</ReplyButton>
                      </ReplyButtonGroup>
                    </ReplyInputWrapper>
                  </ReplyInput>
                )}
              </ReviewItem>
            ))}
          </ReviewList>
          <ReviewInput>
            <ReviewAvatar src="https://avatars.githubusercontent.com/u/12345678" alt="User" />
            <ReviewTextField placeholder="댓글을 입력하세요..." />
          </ReviewInput>
        </ReviewSection>
      </DetailContent>
    </DetailContainer>
  );
}
