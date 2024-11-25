import styled from 'styled-components';

export const NavigationMenu = styled.nav`
  background: white;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;