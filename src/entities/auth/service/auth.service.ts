export const authService = {
  /**
   * 토큰 존재 여부 확인
   */
  hasToken(): boolean {
    return !!localStorage.getItem("accessToken");
  },

  /**
   * 액세스 토큰 가져오기
   */
  getAccessToken(): string | null {
    return localStorage.getItem("accessToken");
  },

  /**
   * 리프레시 토큰 가져오기
   */
  getRefreshToken(): string | null {
    return localStorage.getItem("refreshToken");
  },

  /**
   * 인증 헤더 설정을 위한 구성 객체 생성
   */
  getAuthorizationConfig(): Record<string, any> {
    const token = this.getAccessToken();
    if (!token) return {};

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },
};
