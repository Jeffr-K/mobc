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
  ReviewItem,
  ReviewList,
  ReviewSection,
  ReviewSortButton,
  ReviewTitle,
} from "../x/styles";
import { Eye, Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import { CommentWriter } from "@/features/lounge/ui/molecule/comment-writer.input";

export function Feed({ feed }: any) {
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
        {/* TODO: 피드 상세 우상단에 더보기 아이콘; 이것은 권한에 따라 신고하기 | 차단하기 | 삭제하기 | 수정하기 등이 될 수 있음.*/}
        <DetailMoreButton>
          <MoreHorizontal size={16} />
        </DetailMoreButton>

        {/* 피드의 카테고리와 서브 카테고리 */}
        <DetailCategoryWrapper>
          <DetailCategory>{feed.category && typeof feed.category === "object" ? feed.category.name : "카테고리"}</DetailCategory>
          {feed.category &&
            feed.category.subCategories &&
            feed.category.subCategories.length > 0 &&
            feed.category.subCategories.map(subCategory => <DetailSubCategory key={subCategory._id}>{subCategory.name}</DetailSubCategory>)}
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

          {/* TODO: 팔로워 버튼 */}
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

      {/* 컨텐츠 영역 + 리뷰 영역 */}
      <DetailContent>
        <DetailText>{feed.content}</DetailText>

        {/* TODO: 리뷰 컨테이너 */}
        <ReviewSection>
          {/* 댓글 개수 && 정렬 필터 */}
          <ReviewHeader>
            <ReviewTitle>댓글 {dummyReviews.length}</ReviewTitle>
            <ReviewSortButton>
              최신순 <FaChevronDown size={10} />
            </ReviewSortButton>
          </ReviewHeader>

          {/* 댓글 리스트 */}
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

          {/* 댓글 작성 */}
          <CommentWriter />
        </ReviewSection>
      </DetailContent>
    </DetailContainer>
  );
}
