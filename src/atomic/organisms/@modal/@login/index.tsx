import { Modal } from '../../../atoms/@modal';
import { LoginForm } from '../../../molecules/@form/@login';
import * as S from './styles';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<void>;
  onSocialLogin: (provider: string) => Promise<void>;
  isLoading?: boolean;
}

export const LoginModal = ({
  isOpen,
  onClose,
  onLogin,
  onSocialLogin,
  isLoading,
}: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="로그인">
      <LoginForm onSubmit={onLogin} isLoading={isLoading} />

      <S.Divider>
        <S.DividerText>또는</S.DividerText>
      </S.Divider>

      <div>
        <S.SocialLoginButton provider="google" onClick={() => onSocialLogin('google')}>
          구글로 로그인
        </S.SocialLoginButton>
        <S.SocialLoginButton provider="apple" onClick={() => onSocialLogin('apple')}>
          애플로 로그인
        </S.SocialLoginButton>
        <S.SocialLoginButton provider="kakao" onClick={() => onSocialLogin('kakao')}>
          카카오로 로그인
        </S.SocialLoginButton>
        <S.SocialLoginButton provider="naver" onClick={() => onSocialLogin('naver')}>
          네이버로 로그인
        </S.SocialLoginButton>
      </div>
    </Modal>
  );
};
