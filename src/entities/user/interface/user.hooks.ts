import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../lib/querykey/user.query-keys";
import { fetchUser } from "../api/user.api";
import { useEffect } from "react";

export const useQueryUserHook = () => {
  const { data, refetch, error, ...queryResults } = useQuery<any, Error>({
    queryKey: QueryKeys.user.me,
    queryFn: fetchUser,
    enabled: !!localStorage.getItem("accessToken"),
    retry: 1,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (data?.data) {
      localStorage.setItem("user", JSON.stringify(data.data));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      if (error.message.includes("401")) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
      }
      console.error("Error fetching user:", error);
    }
  }, [error]);

  const cachedUserData = localStorage.getItem("user");
  return {
    userData: data?.data || (cachedUserData ? JSON.parse(cachedUserData) : null),
    refetch,
    ...queryResults,
  };
};
