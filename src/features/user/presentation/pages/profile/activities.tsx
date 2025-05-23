import { ProfileLayout } from "../../layouts/profile.page-layout";
import { ProfileActivity } from "../../organisms/activity.component";
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

export default function ActivitiesPage() {
  return (
    <ProfileLayout>
      <ProfileLayout.Main>
        <Container>
          <Header>
            <Title>활동 내역</Title>
            <Description>
              모든 활동 내역을 확인할 수 있습니다. 게시글, 댓글, 좋아요 등 다양한 활동을 한눈에 볼 수 있습니다.
            </Description>
          </Header>
          <ProfileActivity />
        </Container>
      </ProfileLayout.Main>
    </ProfileLayout>
  );
} 