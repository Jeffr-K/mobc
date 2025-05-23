import { PersonaCards } from '../../organisms/persona.component';
import { ProfileActivity } from '../../organisms/activity.component';
import { ProfileExperience } from '../../organisms/experience.component';
import { ProfileEducation } from '../../organisms/education.component';
import { ProfileGarage } from '../../organisms/garage.component';
import { ProfileBlog } from '../../organisms/blog.component';
import { ProfileSkills } from '../../organisms/skills.component';
import { ProfilePortfolio } from '../../organisms/portfolio.component';
import { ProfileOrganization } from '../../organisms/organization.component';
import { ProfileCave } from '../../organisms/cave.component';
import { ProfileAchievement } from '../../organisms/achievement.component';
import styled from 'styled-components';
import { ProfileLayout } from '../../layouts/profile.page-layout';
import { AnalyticsComposer } from '@/composition/user/analatics.composer';

const Section = styled.div`
  // margin-bottom: 0.5em;
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  overflow: hidden;
  border: 1px solid black;
`;

const CardContent = styled.div`
  padding: 2rem;
`;

export function ProfilePage() {
  
  return (
    <ProfileLayout>
      <ProfileLayout.LeftSidebar>
        <Section>
          <AnalyticsComposer />
        </Section>
        <Section>
          <ProfileOrganization />
        </Section>
        <Section>
          <ProfileCave />
        </Section>
        <Section>
          <ProfileAchievement />
        </Section>
      </ProfileLayout.LeftSidebar>
      <ProfileLayout.Main>
        <Section>
          <PersonaCards />
        </Section>
        <Section>
          <ProfileActivity />
        </Section>
        <Section>
          <Card>
            <CardContent>
              <ProfileExperience />
            </CardContent>
          </Card>
        </Section>
        <Section>
          <Card>
            <CardContent>
              <ProfileEducation />
            </CardContent>
          </Card>
        </Section>
        <Section>
          <Card>
            <CardContent>
              <ProfileGarage />
            </CardContent>
          </Card>
        </Section>
      </ProfileLayout.Main>
      <ProfileLayout.RightSidebar>
        <Section>
          <ProfileBlog />
        </Section>
        <Section>
          <ProfileSkills />
        </Section>
        <Section>
          <ProfilePortfolio />
        </Section>
      </ProfileLayout.RightSidebar>
    </ProfileLayout>
  );
}
