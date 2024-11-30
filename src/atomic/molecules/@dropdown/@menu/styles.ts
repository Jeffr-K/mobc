import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  padding: 8px 12px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.theme.colors.gray700};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const DropdownContent = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  min-width: 200px;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.gray100};
  }
`;
