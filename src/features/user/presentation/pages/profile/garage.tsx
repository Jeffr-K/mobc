import { ProfileLayout } from "../../layouts/profile.page-layout";
import { ProfileGarage } from "../../organisms/garage.component";
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
`;

export default function GaragePage() {
  return (
    <ProfileLayout>
      <ProfileLayout.Main>
        <Container>
          <Header>
            <Title>프로젝트 갤러리</Title>
            <Description>
              모든 프로젝트를 확인할 수 있습니다. 개인 프로젝트, 팀 프로젝트 등 다양한 프로젝트의 상세 정보를 한눈에 볼 수 있습니다.
            </Description>
          </Header>
          <ProfileGarage />
        </Container>
      </ProfileLayout.Main>
    </ProfileLayout>
  );
} 