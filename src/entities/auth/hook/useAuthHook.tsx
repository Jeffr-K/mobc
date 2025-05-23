import { useCallback } from "react";
import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { loginModalOpenAtom, loginLoadingAtom } from "@/entities/auth/hook/useLoginModalHook";
import { useMutationLoginHook } from "@/entities/auth/interface/auth.hooks";
import { useQueryUserHook } from "@/features/user/core/hooks/user.hooks";
import { userAtom } from "@/features/user/infrastructure/atoms/user.atoms";

/**
 * 인증 관련 로직을 담당하는 커스텀 훅
 */
export const useAuthHook = () => {
  const navigate = useNavigate();
  const setIsLoading = useSetAtom(loginLoadingAtom);
  const setModalOpen = useSetAtom(loginModalOpenAtom);
  const setUser = useSetAtom(userAtom);

  const { refetch } = useQueryUserHook();
  const loginMutation = useMutationLoginHook();

  /**
   * 이메일/비밀번호 로그인
   */
  const login = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      try {
        // 로그인 API 호출
        const result = await loginMutation.mutateAsync({ email, password });

        if (result.data?.accessToken) {
          // 토큰 저장
          localStorage.setItem("accessToken", result.data.accessToken);
          localStorage.setItem("refreshToken", result.data.refreshToken);

          // 사용자 정보 조회
          const response = await refetch();
          if (response) {
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            setModalOpen(false);
            navigate("/");
          }
          return true;
        }
        return false;
      } catch (error) {
        console.error("Login failed:", error);
        alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [loginMutation, refetch, setUser, setModalOpen, setIsLoading, navigate],
  );

  /**
   * 소셜 로그인
   */
  const socialLogin = useCallback(
    async (provider: string) => {
      try {
        setIsLoading(true);
        console.log(`${provider} 로그인 시도`);

        // 소셜 로그인은 리다이렉트 방식으로 처리
        window.location.href = `/api/auth/${provider}`;
        return true;
      } catch (error) {
        console.error(`${provider} login failed:`, error);
        alert("소셜 로그인에 실패했습니다. 다시 시도해주세요.");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading],
  );

  /**
   * 로그아웃
   */
  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  }, [setUser, navigate]);

  /**
   * 토큰 존재 여부 확인
   */
  const hasToken = useCallback(() => {
    return !!localStorage.getItem("accessToken");
  }, []);

  return {
    login,
    socialLogin,
    logout,
    hasToken,
  };
};
