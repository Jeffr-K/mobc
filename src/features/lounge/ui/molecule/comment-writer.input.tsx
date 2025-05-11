import { ReactElement } from "react";
import { ReviewAvatar, ReviewInput, ReviewTextField } from "@/features/lounge/ui/x/styles";

export function CommentWriter(): ReactElement {
  // TODO: 현재 나의 세션(GlobalState)에서 사용자 정보를 가져와야 함

  return (
    <ReviewInput>
      <ReviewAvatar src="https://avatars.githubusercontent.com/u/12345678" alt="User" />
      <ReviewTextField placeholder="댓글을 입력하세요..." />
    </ReviewInput>
  );
}
