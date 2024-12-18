import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const DuplicateCheckButton = styled.button`
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  margin-top: 8px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;