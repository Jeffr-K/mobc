import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  width: 100%;
  max-width: 360px;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
  }

  input {
    width: 100%;
    height: 52px;
    padding: 0 ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: 1rem;
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 320px;
  margin: ${({ theme }) => theme.spacing.md} 0;
  font-size: 0.75rem;
`;

export const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 360px;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const SocialLoginButton = styled.button<{ provider: string }>`
  width: 48px;
  height: 48px;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray50};
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Divider = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  margin: ${({ theme }) => theme.spacing.md} 0;
  text-align: center;

  &::before {
    content: "";
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
  font-size: 0.875rem;
`;

export const SaveIdWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin: 0;
  }
`;

export const FindLinksWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const FindLink = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.75rem;
  white-space: nowrap;
  flex: 1;
  text-align: center;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }

  &:hover {
    text-decoration: underline;
  }
`;
