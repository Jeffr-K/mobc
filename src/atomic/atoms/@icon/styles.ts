import styled from 'styled-components';

export const StyledIconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background-color: ${props => props.theme.colors.gray100};
  }
`;
