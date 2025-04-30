import styled from 'styled-components';

export function Analytics(entity: { totalViews: number, profileRank: number, appearance: number }) {
  return (
    <Container>
      <Header>
        <Title>프로필 분석</Title>
        <Period>최근 30일</Period>
      </Header>

      <StatsContainer>
        <StatItem>
          <Label>총 조회수</Label>
          <Value>{entity.totalViews}</Value>
        </StatItem>
        
        <StatItem>
          <Label>프로필 순위</Label>
          <Value>{entity.profileRank}위</Value>
        </StatItem>

        <StatItem>
          <Label>노출 수</Label>
          <Value>{entity.appearance}</Value>
        </StatItem>
      </StatsContainer>

      <DetailLink href="/analytics/detail">
        자세한 프로필 분석 보기
      </DetailLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Period = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.375rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  font-size: 0.875rem;
  color: #4b5563;
`;

const Value = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const DetailLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  margin-top: 0.5rem;
  color: #2563eb;
  border: 1px solid #2563eb;
  border-radius: 0.5rem;
  text-decoration: none;

  &:hover {
    background: #eff6ff;
  }
`;