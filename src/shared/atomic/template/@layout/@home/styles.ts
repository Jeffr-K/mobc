import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
`;

export const LeftSidebar = styled.div`
  grid-area: main;
  min-width: 0;
`;

export const MainContent = styled.div`
  grid-area: main;
  min-width: 0;
`;

export const RightSidebar = styled.div`
  grid-area: right;
  min-width: 0;
`;