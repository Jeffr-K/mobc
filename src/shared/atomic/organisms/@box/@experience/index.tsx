import * as S from './styles';
import { useState } from 'react';
import { LoadingSpinner } from '@/shared/atomic/molecules/@loading';
import { Error } from '@/shared/atomic/molecules/@error';
import { useQueryProfileExperiencesHook } from '@/entities/user/interface/profile.hooks';
import { useProfileExperiencesStore } from '@/entities/user/adapter/profile.atoms';

export const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hook = useQueryProfileExperiencesHook();
  const { experiences } = useProfileExperiencesStore();

  if (hook.isLoading) return <LoadingSpinner />
  if (hook.isError) return <Error />
  if (!experiences) return null;

  const displayedExperiences = isExpanded ? experiences : experiences?.slice(0, 2);

  if (!displayedExperiences?.length) return null;

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