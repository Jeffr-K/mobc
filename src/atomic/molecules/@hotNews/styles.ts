// @/atomic/molecules/@hotNews/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const NewsWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NewsText = styled.div`
  position: absolute;
  width: 100%;
  height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray800};
  display: flex;
  align-items: center;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;