import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${p => p.theme.spacing.md};
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  gap: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 ${p => p.theme.spacing.sm};
    gap: 4px;
  }
`;

export const LeftSidebar = styled.aside`
  @media (max-width: 768px) { display: none }
`;

export const MainContent = styled.main`
  min-width: 0;
`;

export const RightSidebar = styled.aside`
  @media (max-width: 1024px) { display: none }
`;