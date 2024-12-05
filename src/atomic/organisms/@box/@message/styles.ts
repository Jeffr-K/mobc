import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  background: #FFFFFF;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  z-index: 9999;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    box-shadow: ${({ theme }) => theme.shadow.lg};
    z-index: -1;
  }
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