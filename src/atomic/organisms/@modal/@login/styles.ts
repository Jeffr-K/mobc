import styled from 'styled-components';

export const SocialLoginButton = styled.button<{ provider: string }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  ${({ provider, theme }) => {
    const configs = {
      google: {
        bg: theme.colors.google,
        color: theme.colors.text.primary,
        border: theme.colors.border,
      },
      apple: {
        bg: theme.colors.apple,
        color: theme.colors.text.white,
        border: theme.colors.apple,
      },
      kakao: {
        bg: theme.colors.kakao,
        color: theme.colors.text.primary,
        border: theme.colors.kakao,
      },
      naver: {
        bg: theme.colors.naver,
        color: theme.colors.text.white,
        border: theme.colors.naver,
      },
    };

    const config = configs[provider as keyof typeof configs];
    return `
      background-color: ${config.bg};
      color: ${config.color};
      border: 1px solid ${config.border};
    `;
  }}
`;

export const Divider = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const DividerText = styled.span`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.modal};
  padding: 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
