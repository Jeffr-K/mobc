import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

export const LeftSidebar = styled.aside`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainContent = styled.main`
  min-width: 0; // Prevents content from breaking grid layout
`;

export const RightSidebar = styled.aside`
  @media (max-width: 1024px) {
    display: none;
  }
`;