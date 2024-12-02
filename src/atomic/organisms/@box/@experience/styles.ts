import { styled } from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 gap: 24px;
 padding: 32px;
 border-radius: ${({ theme }) => theme.borderRadius.lg};
 background-color: ${({ theme }) => theme.colors.white};
 box-shadow: ${({ theme }) => theme.shadow.default};
 max-width: 800px;
 margin: 0 auto;
`;

export const Header = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 24px;
`;

export const Title = styled.h2`
 font-size: 24px;
 font-weight: 600;
 color: ${({ theme }) => theme.colors.primary};
 margin: 0;
`;

// Grid를 List로 변경
export const List = styled.div`
 display: flex;
 flex-direction: column;
 gap: 24px;
`;

export const ExperienceCard = styled.div`
 display: flex;
 gap: 24px;
 padding: 24px;
 border-radius: ${({ theme }) => theme.borderRadius.md};
 background-color: ${({ theme }) => theme.colors.gray50};
 transition: transform 0.2s ease;
 
 &:hover {
   transform: translateY(-4px);
 }
`;

export const LogoContainer = styled.div`
 flex-shrink: 0;
 width: 80px;
 height: 80px;
 display: flex;
 align-items: center;
 justify-content: center;
`;

export const CompanyLogo = styled.img`
 width: 100%;
 height: 100%;
 object-fit: contain;
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 gap: 12px;
 flex: 1;
`;

export const CompanyInfo = styled.div`
 display: flex;
 flex-direction: column;
 gap: 4px;
`;

export const CompanyName = styled.h3`
 font-size: 20px;
 font-weight: 600;
 color: ${({ theme }) => theme.colors.gray900};
 margin: 0;
`;

export const CompanyArea = styled.span`
 font-size: 16px;
 color: ${({ theme }) => theme.colors.gray600};
`;

export const RoleInfo = styled.div`
 display: flex;
 flex-direction: column;
 gap: 4px;
`;

export const Role = styled.span`
 font-size: 18px;
 font-weight: 500;
 color: ${({ theme }) => theme.colors.gray800};
`;

export const Period = styled.span`
 font-size: 14px;
 color: ${({ theme }) => theme.colors.gray600};
`;

export const Summary = styled.p`
 font-size: 16px;
 line-height: 1.6;
 color: ${({ theme }) => theme.colors.gray700};
 margin: 0;
`;

export const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const ExpandIcon = styled.span<{ $isExpanded: boolean }>`
  transform: rotate(${props => props.$isExpanded ? '180deg' : '0deg'});
  transition: transform 0.2s ease;
`;