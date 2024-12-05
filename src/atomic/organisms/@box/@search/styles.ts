import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: #FFFFFF;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  z-index: 9999;
`;

export const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

export const Content = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const EmptyState = styled.div`
  padding: 32px 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray500};
`; 