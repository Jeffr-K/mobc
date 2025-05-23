import { useMutation } from "@tanstack/react-query";
import { ApiResponse } from "@/shared/utils/apiResponse";
import { FeedId } from "@/features/lounge/infrastructure/model/feed.model";
import { fetchCreateFeed, fetchUploadFile } from "@/features/lounge/infrastructure/api/api";

export const useMutationFeedRegisterHook = () => {
  return useMutation<ApiResponse<FeedId>, Error, FormData>({
    mutationFn: formData => fetchCreateFeed(formData),
    meta: {
      errorMessage: "피드를 작성하는 중 오류가 발생했습니다",
      successMessage: "피드가 성공적으로 등록되었습니다",
    },
  });
};

export const useMutationUploadFileHook = () => {
  const mutation = useMutation<ApiResponse<{ fileUrl: string }>, Error, FormData>({
    mutationFn: formData => fetchUploadFile(formData),
    meta: {
      errorMessage: "파일 업로드 중 오류가 발생했습니다",
      successMessage: "파일이 성공적으로 업로드되었습니다",
    },
  });

  return { mutation };
};
