import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.main`
  margin-top: 60px;  // Navigator 높이만큼 여백
  padding: 24px;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  
  @media (max-width: 1440px) {
    max-width: 1240px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
