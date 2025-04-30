// Background/styles.ts
import { styled } from "styled-components";

// Background/styles.ts
export const Container = styled.div`
  grid-area: banner;
  position: relative;
  height: 280px;
`;

export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;  // top: 0, right: 0, bottom: 0, left: 0
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary || theme.colors.primary + '80'}
  );
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: flex-end;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  padding: 24px;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

export const BannerInfo = styled.div`
  color: white;
  margin-bottom: 8px;
`;

export const Name = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 4px 0;
`;

export const Position = styled.div`
  font-size: 18px;
  opacity: 0.9;
`;