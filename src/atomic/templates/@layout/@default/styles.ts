import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: ${props => props.theme.colors.gray50};
`;
