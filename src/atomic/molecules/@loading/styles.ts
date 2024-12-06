import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.lg};
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${props => props.theme.colors.gray300};
  border-top: 3px solid ${props => props.theme.colors.primary.main};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Text = styled.p`
  margin-top: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.gray600};
  font-size: ${props => props.theme.fontSize.sm};
`;