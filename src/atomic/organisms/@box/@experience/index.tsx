import * as S from './styles';
import { useState } from 'react';
import { useQueryProfileHook } from '@/platforms/member/modules/profile/api/hooks';
import { useProfileStore } from '@/platforms/member/modules/profile/atom/atoms';
import { LoadingSpinner } from '@/atomic/molecules/@loading';
import { Error } from '@/atomic/molecules/@error';

export const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hook = useQueryProfileHook();
  const { profile } = useProfileStore();

  if (hook.isLoading) return <LoadingSpinner />
  if (hook.isError) return <Error />
  if (!profile) return null;

  const { experience } = profile;
  const displayedExperiences = isExpanded ? experience : experience?.slice(0, 2);

  if (!experience?.length) return null;

  return (
    <S.Container>
      <S.Header>
        <S.Title>Experience</S.Title>
      </S.Header>
      
      <S.List>
        {displayedExperiences.map((exp, index) => (
          <S.ExperienceCard key={index}>
            <S.LogoContainer>
              <S.CompanyLogo src={exp.companyLogo} alt={exp.companyName} />
            </S.LogoContainer>
            
            <S.Content>
              <S.CompanyInfo>
                <S.CompanyName>{exp.companyName}</S.CompanyName>
                <S.CompanyArea>{exp.companyArea}</S.CompanyArea>
              </S.CompanyInfo>
              
              <S.RoleInfo>
                <S.Role>{exp.role}</S.Role>
                <S.Period>
                  {exp.period[0] && new Date(exp.period[0]).toLocaleDateString()} - 
                  {exp.period[1] ? new Date(exp.period[1]).toLocaleDateString() : 'Present'}
                </S.Period>
              </S.RoleInfo>
              
              <S.Summary>{exp.description}</S.Summary>
              {exp.summary && <S.Summary>{exp.summary}</S.Summary>}
              {exp.location && <S.Location>{exp.location}</S.Location>}
              {exp.team && <S.Team>Team: {exp.team}</S.Team>}
            </S.Content>
          </S.ExperienceCard>
        ))}
      </S.List>
      
      {displayedExperiences.length > 2 && (
        <S.ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '접기' : '펼쳐보기'} 
          <S.ExpandIcon $isExpanded={isExpanded}>▼</S.ExpandIcon>
        </S.ExpandButton>
      )}
    </S.Container>
  );
};