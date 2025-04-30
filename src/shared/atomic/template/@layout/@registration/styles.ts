import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 48px 24px;
  gap: 120px;
  position: relative;
  min-height: calc(100vh - 60px);
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;
`;

export const LeftSection = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RightSection = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray200};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;