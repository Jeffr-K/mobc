import styled from 'styled-components';

export const SearchWrapper = styled.div`
  position: relative;
  width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 36px 8px 12px;
  border: 1px solid ${props => props.theme.colors.gray200};
  border-radius: 20px;
  outline: none;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.gray500};
`;
