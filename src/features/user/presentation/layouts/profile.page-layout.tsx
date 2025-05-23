import { Background } from '@/shared/atomic/organisms/@box/@background';
import { styled } from 'styled-components';

type ProfileLayoutComposition = {
  LeftSidebar: React.FC<{ children: React.ReactNode }>;
  Main: React.FC<{ children: React.ReactNode }>;
  RightSidebar: React.FC<{ children: React.ReactNode }>;
};

export const ProfileLayout: React.FC<{ children: React.ReactNode }> & ProfileLayoutComposition = ({ children }) => {
  return (
    <Container>
      <Background />
      {children}
    </Container>
  );
};

const StyledLeftSidebar = styled.aside`
  grid-area: left;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledMain = styled.main`
  grid-area: main;
  min-width: 0;
`;

const StyledRightSidebar = styled.aside`
  grid-area: right;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: 1024px) {
    display: none;
  }
`;

ProfileLayout.LeftSidebar = function LeftSidebar({ children }) {
  return <StyledLeftSidebar>{children}</StyledLeftSidebar>;
};

ProfileLayout.Main = function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
};

ProfileLayout.RightSidebar = function RightSidebar({ children }) {
  return <StyledRightSidebar>{children}</StyledRightSidebar>;
};

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "banner banner banner"
    "left main right";
  grid-template-rows: auto 1fr;
  grid-template-columns: 300px 1fr 400px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  gap: 16px;
  max-width: 1600px;

  @media (max-width: 1440px) {
    max-width: 1240px;
    grid-template-columns: minmax(0, 2.5fr) minmax(0, 15fr) minmax(300px, 4.5fr);
  }

  @media (max-width: 1024px) {
    grid-template-areas:
      "banner banner"
      "left main";
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  }

  @media (max-width: 768px) {
    grid-template-areas:
      "banner"
      "main";
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
`;