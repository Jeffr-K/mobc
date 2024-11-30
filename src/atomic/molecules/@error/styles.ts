import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.errorLight};
  border-radius: ${props => props.theme.borderRadius.md};
`;

export const Icon = styled.span`
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const Message = styled.p`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export const SubMessage = styled.p`
  color: ${props => props.theme.colors.gray600};
  font-size: ${props => props.theme.fontSizes.sm};
`;
