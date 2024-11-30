import { styled } from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadow.sm};
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.gray900};
`;

export const Companies = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const Company = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadow.sm};
`;

export const CompanyItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.gray200};
  border-radius: ${props => props.theme.borderRadius.md};
  
  &:hover {
    background-color: ${props => props.theme.colors.gray50};
  }
`;

export const CompanyLogo = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CompanyName = styled.div`
  font-size: ${props => props.theme.fontSize.base};
  color: ${props => props.theme.colors.gray900};
`;