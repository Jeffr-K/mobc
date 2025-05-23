// styles.ts
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

export const Grid = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 20px;
`;

export const RepoCard = styled.a`
 display: flex;
 flex-direction: column;
 padding: 16px;
 border-radius: ${({ theme }) => theme.borderRadius.md};
 border: 1px solid black;
 background-color: ${({ theme }) => theme.colors.white};
 text-decoration: none;
 transition: transform 0.2s ease, box-shadow 0.2s ease;

 &:hover {
   transform: translateY(-4px);
   box-shadow: ${({ theme }) => theme.shadow.md};
 }
`;

export const RepoHeader = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: flex-start;
 gap: 8px;
 margin-bottom: 8px;
`;

export const RepoName = styled.h3`
 font-size: 16px;
 font-weight: 600;
 color: ${({ theme }) => theme.colors.primary};
 margin: 0;
 word-break: break-word;
`;

export const RepoVisibility = styled.span`
 padding: 2px 6px;
 border-radius: 12px;
 background-color: ${({ theme }) => theme.colors.gray100};
 color: ${({ theme }) => theme.colors.gray600};
 font-size: 12px;
 font-weight: 500;
 white-space: nowrap;
`;

export const RepoDescription = styled.p`
 font-size: 14px;
 color: ${({ theme }) => theme.colors.gray700};
 margin: 0 0 16px 0;
 line-height: 1.5;
 flex-grow: 1;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
 overflow: hidden;
`;

export const RepoFooter = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;
 font-size: 12px;
 color: ${({ theme }) => theme.colors.gray600};
`;

export const RepoLanguage = styled.div`
 display: flex;
 align-items: center;
 gap: 4px;
`;

export const LanguageIcon = styled.div`
 width: 8px;
 height: 8px;
 border-radius: 50%;
 background-color: ${({ theme }) => theme.colors.primary};
`;

export const RepoStats = styled.div`
 display: flex;
 align-items: center;
 gap: 16px;
`;

export const StatItem = styled.div`
 display: flex;
 align-items: center;
 gap: 4px;
`;

export const StarIcon = styled.div`
 width: 16px;
 height: 16px;
 background-color: ${({ theme }) => theme.colors.gray400};
 clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;

export const ForkIcon = styled.div`
 width: 16px;
 height: 16px;
 background-color: ${({ theme }) => theme.colors.gray400};
`;

// 이미 제공된 모달 관련 스타일들 유지
export const Modal = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 100;
`;

export const ModalOverlay = styled.div`
 position: absolute;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
 position: relative;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 background: white;
 padding: 2rem;
 border-radius: 8px;
 max-width: 600px;
 width: 90%;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

export const ModalVisibility = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 14px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ModalDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray700};
  line-height: 1.5;
  margin: 0;
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.h4`
  font-size: 18px;
  margin: 0;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 14px;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FeatureItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray700};
  line-height: 1.5;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const StatBox = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StatLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const StatValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const ModalFooter = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export const ViewButton = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;