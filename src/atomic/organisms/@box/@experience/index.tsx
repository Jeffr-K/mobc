import * as S from './styles';
import { useState } from 'react';

const experiences = [
  {
    logo: '/images/company1.svg',
    name: 'Google',
    area: 'Web Platform',
    role: 'Senior Software Engineer',
    period: '2020.03 - Present',
    summary: 'Led development of core web platform features...'
  },
  {
    logo: '/images/company2.svg', 
    name: 'Facebook',
    area: 'Frontend Infrastructure',
    role: 'Software Engineer',
    period: '2018.01 - 2020.02',
    summary: 'Developed internal tools...'
  },
  {
    logo: '/images/company3.svg',
    name: 'Amazon',
    area: 'AWS Services',
    role: 'Software Developer',
    period: '2016.01 - 2018.01',
    summary: 'Built cloud infrastructure...'
  }
];

export const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedExperiences = isExpanded ? experiences : experiences.slice(0, 2);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Experience</S.Title>
      </S.Header>
      
      <S.List>
        {displayedExperiences.map((exp, index) => (
          <S.ExperienceCard key={index}>
            <S.LogoContainer>
              <S.CompanyLogo src={exp.logo} alt={exp.name} />
            </S.LogoContainer>
            
            <S.Content>
              <S.CompanyInfo>
                <S.CompanyName>{exp.name}</S.CompanyName>
                <S.CompanyArea>{exp.area}</S.CompanyArea>
              </S.CompanyInfo>
              
              <S.RoleInfo>
                <S.Role>{exp.role}</S.Role>
                <S.Period>{exp.period}</S.Period>
              </S.RoleInfo>
              
              <S.Summary>{exp.summary}</S.Summary>
            </S.Content>
          </S.ExperienceCard>
        ))}
      </S.List>
      
      {experiences.length > 2 && (
        <S.ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '접기' : '펼쳐보기'} 
          <S.ExpandIcon $isExpanded={isExpanded}>▼</S.ExpandIcon>
        </S.ExpandButton>
      )}
    </S.Container>
  );
};