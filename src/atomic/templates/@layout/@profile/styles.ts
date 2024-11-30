import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  grid-template-columns: minmax(0, 4fr) minmax(0, 14fr) minmax(300px, 6fr);
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
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};

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