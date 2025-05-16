import { useState } from "react";
import { LoginForm } from "../../../molecules/@form/@login";
import * as S from "./styles";
import { Modal } from "@/shared/atomic/atoms/@modal/modal";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { useAtom } from "jotai";
import { loginLoadingAtom, loginModalOpenAtom } from "@/entities/auth/hook/useLoginModalHook";
import { useAuthHook } from "@/entities/auth/hook/useAuthHook";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<void>;
  onSocialLogin?: (provider: string) => Promise<void>;
  isLoading?: boolean;
}

export const LoginModal = () => {
  const [isOpen, setIsOpen] = useAtom(loginModalOpenAtom);
  const [isLoading] = useAtom(loginLoadingAtom);
  const { login, socialLogin } = useAuthHook();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLoginSubmitButton = async (email: string, password: string) => {
    await login(email, password);
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <S.Container>
        <S.HeaderContainer>
          <S.Title>PERSONA</S.Title>
          <S.SubTitle>당신의 새로운 페르소나를 만나보세요</S.SubTitle>
        </S.HeaderContainer>

        <S.FormContainer>
          {/* Props drilling 제거 */}
          <LoginForm onSubmit={handleLoginSubmitButton} isLoading={isLoading} />
          <S.FormFooter>
            <S.StyledLink to="/signup">회원가입</S.StyledLink>
            <S.StyledLink to="/business-login">기업 회원으로 로그인하기</S.StyledLink>
          </S.FormFooter>
          <S.Divider>
            <S.DividerText>또는 다른 계정으로 로그인</S.DividerText>
          </S.Divider>

          <S.SocialLoginWrapper>
            <S.SocialLoginButton provider="google" onClick={() => socialLogin("google")}>
              <FcGoogle size={24} />
            </S.SocialLoginButton>
            <S.SocialLoginButton provider="apple" onClick={() => socialLogin("apple")}>
              <BsApple size={24} />
            </S.SocialLoginButton>
            <S.SocialLoginButton provider="kakao" onClick={() => socialLogin("kakao")}>
              <RiKakaoTalkFill size={24} color="#000000DE" />
            </S.SocialLoginButton>
            <S.SocialLoginButton provider="naver" onClick={() => socialLogin("naver")}>
              <SiNaver size={24} color="#000000DE" />
            </S.SocialLoginButton>
          </S.SocialLoginWrapper>
        </S.FormContainer>
      </S.Container>
    </Modal>
  );
};
