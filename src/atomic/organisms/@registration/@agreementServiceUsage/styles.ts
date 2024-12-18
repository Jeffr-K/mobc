import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
  margin: 8px 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ViewButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;
