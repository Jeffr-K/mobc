// profile styles.ts
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.default};
  position: relative;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0;
`;

export const Count = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  width: 100%;  // 컨테이너 width에 맞춤
`;

export const SuggestionItem = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.gray50};
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateX(4px);
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

export const CompanyName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0;
`;

export const NewBadge = styled.span`
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 12px;
  border-radius: 12px;
`;

export const Position = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 4px;
`;

export const Salary = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: 4px;
`;

export const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};
`;

export const ViewMoreButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray50};
    border-color: ${({ theme }) => theme.colors.gray300};
  }
`;