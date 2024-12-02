import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  height: 60px;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  padding: 0 24px;

  @media (max-width: 1440px) {
    max-width: 1240px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

export const Logo = styled.div`
 font-weight: 700;
 font-size: 18px;
 cursor: pointer;
`;

export const IconWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 padding: 8px;
 border-radius: ${({ theme }) => theme.borderRadius.sm};
 
 &:hover {
   background-color: ${({ theme }) => theme.colors.gray50};
 }
`;

export const HotNewsWrapper = styled.div`
 width: 320px;
 margin: 0 auto;
`;

export const SearchWrapper = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;
 padding: 8px 12px;
 background-color: ${({ theme }) => theme.colors.gray50};
 border-radius: ${({ theme }) => theme.borderRadius.md};
 width: 100%;
 max-width: 480px;
`;

export const SearchInput = styled.input`
 border: none;
 background: none;
 outline: none;
 width: 100%;
 font-size: 14px;
 
 &::placeholder {
   color: ${({ theme }) => theme.colors.gray400};
 }
`;

export const ProfileWrapper = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;
 cursor: pointer;
 padding: 4px 8px;
 border-radius: ${({ theme }) => theme.borderRadius.md};
 
 &:hover {
   background-color: ${({ theme }) => theme.colors.gray50};
 }
`;

export const ProfileImage = styled.div`
 width: 32px;
 height: 32px;
 border-radius: 50%;
 background-color: ${({ theme }) => theme.colors.gray100};
 display: flex;
 align-items: center;
 justify-content: center;
`;

export const ProfileName = styled.div`
 font-size: 14px;
 font-weight: 500;
`;

export const LeftIconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;