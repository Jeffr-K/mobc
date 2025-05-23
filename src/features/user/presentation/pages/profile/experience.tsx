import { ProfileLayout } from "../../layouts/profile.page-layout";
import { ProfileExperience } from "../../organisms/experience.component";
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

export default function ExperiencePage() {
  return (
    <ProfileLayout>
      <ProfileLayout.Main>
        <Container>
          <Header>
            <Title>경력 사항</Title>
            <Description>
              전체 경력 사항을 확인할 수 있습니다. 회사, 직무, 기간 등 상세한 경력 정보를 한눈에 볼 수 있습니다.
            </Description>
          </Header>
          <ProfileExperience />
        </Container>
      </ProfileLayout.Main>
    </ProfileLayout>
  );
} 