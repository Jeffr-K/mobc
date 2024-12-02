import { styled } from "styled-components";

// ProfileLayout/styles.ts
export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-areas:
    "banner banner banner"
    "left main right";
  grid-template-rows: auto 1fr;
  grid-template-columns: 300px 1fr 400px;
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

export const LeftSidebar = styled.aside`
 grid-area: left;
 display: flex;
 flex-direction: column;
 gap: ${props => props.theme.spacing.lg};

 @media (max-width: 768px) {
   display: none;
 }
`;

export const MainContent = styled.main`
 grid-area: main;
 min-width: 0;
`;

export const RightSidebar = styled.aside`
 grid-area: right;
 display: flex;
 flex-direction: column;
 gap: ${props => props.theme.spacing.lg};

 @media (max-width: 1024px) {
   display: none;
 }
`;