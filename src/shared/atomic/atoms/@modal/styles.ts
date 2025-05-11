import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

interface ModalContainerProps {
  size?: "small" | "medium" | "large";
}

const sizeMap = {
  small: "400px",
  medium: "560px",
  large: "720px",
};

export const ModalContainer = styled.div<ModalContainerProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.background.modal};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  width: 100%;
  max-width: ${({ size = "medium" }) => sizeMap[size]};
  min-height: 200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl};
  animation: ${slideIn} 0.3s ease-out;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 85vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray50};
  }
`;

// 새로 추가되는 스타일들
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-right: 40px; // 닫기 버튼 공간 확보
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px; // 스크롤바 공간

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray300};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gray400};
  }
`;
