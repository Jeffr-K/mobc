import { ProfileLayout } from "../../layouts/profile.page-layout";
import { ProfileEducation } from "../../organisms/education.component";
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

export default function EducationPage() {
  return (
    <ProfileLayout>
      <ProfileLayout.Main>
        <Container>
          <Header>
            <Title>학력 사항</Title>
            <Description>
              전체 학력 사항을 확인할 수 있습니다. 학교, 전공, 학위 등 상세한 학력 정보를 한눈에 볼 수 있습니다.
            </Description>
          </Header>
          <ProfileEducation />
        </Container>
      </ProfileLayout.Main>
    </ProfileLayout>
  );
} 