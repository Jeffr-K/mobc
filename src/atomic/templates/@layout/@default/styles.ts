import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: ${props => props.theme.colors.gray50};
`;
