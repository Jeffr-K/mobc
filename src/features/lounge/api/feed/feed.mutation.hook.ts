import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ApiResponse } from "@/shared/utils/apiResponse";
import { Feed, FeedId } from "@/features/lounge/model/feed.model";
import { fetchCreateFeed, fetchFeed, fetchUploadFile } from "@/features/lounge/api/api";
import { authService } from "@/entities/auth/service/auth.service";

export const useMutationFeedRegisterHook = () => {
  const mutation = useMutation<ApiResponse<FeedId>, Error, FormData>({
    mutationFn: formData => {
      const accessToken = authService.getAccessToken();
      if (!accessToken) {
        throw new Error("인증이 필요합니다. 로그인 후 이용해주세요.");
      }
      return fetchCreateFeed(formData, accessToken);
    },
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      console.log("Feed registration successful:", mutation.data);
    }
  }, [mutation.isSuccess, mutation.data]);

  useEffect(() => {
    if (mutation.isError) {
      console.error("Error registering feed:", mutation.error);
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};

export const useMutationUploadFileHook = () => {
  const mutation = useMutation<ApiResponse<{ fileUrl: string }>, Error, FormData>({
    mutationFn: formData => {
      const accessToken = authService.getAccessToken();
      if (!accessToken) {
        throw new Error("인증이 필요합니다. 로그인 후 이용해주세요.");
      }
      return fetchUploadFile(formData, accessToken);
    },
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      console.log("File upload successful:", mutation.data);
    }
  }, [mutation.isSuccess, mutation.data]);

  useEffect(() => {
    if (mutation.isError) {
      console.error("Error uploading file:", mutation.error);
    }
  }, [mutation.isError, mutation.error]);

  return { mutation };
};

export const useQueryFeedHook = (feedUuid: string) => {
  const query = useQuery<ApiResponse<Feed>, Error>({
    queryKey: ["feed", feedUuid],
    queryFn: () => fetchFeed({ feedUuid }),
    enabled: !!feedUuid,
  });

  useEffect(() => {
    if (query.isSuccess) {
      console.log("Feed fetched successfully:", query.data);
    }
  }, [query.isSuccess, query.data]);

  useEffect(() => {
    if (query.isError) {
      console.error("Error fetching feed:", query.error);
    }
  }, [query.isError, query.error]);

  return query;
};
