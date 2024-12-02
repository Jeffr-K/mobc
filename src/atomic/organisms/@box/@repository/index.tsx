import * as S from './styles';
import { useState } from 'react';

const repositories = [
 {
   name: 'Project Name 1',
   description: 'A modern web application built with React and TypeScript',
   language: 'TypeScript',
   stars: 124,
   forks: 45,
   updatedAt: '2024-03-15',
   url: 'https://github.com/username/repo1',
   // 모달에 표시될 추가 정보들
   details: {
     technologies: ['React', 'TypeScript', 'Redux', 'Styled-Components'],
     features: [
       'User authentication',
       'Real-time data updates',
       'Responsive design',
       'Dark mode support'
     ],
     contributors: 8,
     commits: 256,
     issues: 15,
     pullRequests: 25
   }
 },
 // ... 더 많은 레포지토리
];

export const Repository = () => {
 const [modalOpen, setModalOpen] = useState(false);
 const [selectedRepo, setSelectedRepo] = useState(null);

 const handleRepoClick = (e, repo) => {
   e.preventDefault();
   setSelectedRepo(repo);
   setModalOpen(true);
 };

 return (
   <S.Container>
     <S.Header>
       <S.Title>Repository</S.Title>
     </S.Header>
     
     <S.Grid>
       {repositories.map((repo, index) => (
         <S.RepoCard 
           key={index} 
           href={repo.url} 
           onClick={(e) => handleRepoClick(e, repo)}
         >
           <S.RepoHeader>
             <S.RepoName>{repo.name}</S.RepoName>
             <S.RepoVisibility>Public</S.RepoVisibility>
           </S.RepoHeader>
           
           <S.RepoDescription>{repo.description}</S.RepoDescription>
           
           <S.RepoFooter>
             <S.RepoLanguage>
               <S.LanguageIcon />
               {repo.language}
             </S.RepoLanguage>
             
             <S.RepoStats>
               <S.StatItem>
                 <S.StarIcon />
                 {repo.stars}
               </S.StatItem>
               <S.StatItem>
                 <S.ForkIcon />
                 {repo.forks}
               </S.StatItem>
             </S.RepoStats>
           </S.RepoFooter>
         </S.RepoCard>
       ))}
     </S.Grid>

     {modalOpen && selectedRepo && (
       <S.Modal>
         <S.ModalOverlay onClick={() => setModalOpen(false)} />
         <S.ModalContent>
           <S.ModalCloseButton onClick={() => setModalOpen(false)}>×</S.ModalCloseButton>
           
           <S.ModalHeader>
             <S.ModalTitle>{selectedRepo.name}</S.ModalTitle>
             <S.ModalVisibility>Public</S.ModalVisibility>
           </S.ModalHeader>

           <S.ModalBody>
             <S.ModalDescription>{selectedRepo.description}</S.ModalDescription>
             
             <S.ModalSection>
               <S.SectionTitle>Technologies</S.SectionTitle>
               <S.TagList>
                 {selectedRepo.details.technologies.map((tech, index) => (
                   <S.Tag key={index}>{tech}</S.Tag>
                 ))}
               </S.TagList>
             </S.ModalSection>

             <S.ModalSection>
               <S.SectionTitle>Key Features</S.SectionTitle>
               <S.FeatureList>
                 {selectedRepo.details.features.map((feature, index) => (
                   <S.FeatureItem key={index}>{feature}</S.FeatureItem>
                 ))}
               </S.FeatureList>
             </S.ModalSection>

             <S.ModalSection>
               <S.SectionTitle>Statistics</S.SectionTitle>
               <S.StatsGrid>
                 <S.StatBox>
                   <S.StatLabel>Contributors</S.StatLabel>
                   <S.StatValue>{selectedRepo.details.contributors}</S.StatValue>
                 </S.StatBox>
                 <S.StatBox>
                   <S.StatLabel>Commits</S.StatLabel>
                   <S.StatValue>{selectedRepo.details.commits}</S.StatValue>
                 </S.StatBox>
                 <S.StatBox>
                   <S.StatLabel>Issues</S.StatLabel>
                   <S.StatValue>{selectedRepo.details.issues}</S.StatValue>
                 </S.StatBox>
                 <S.StatBox>
                   <S.StatLabel>Pull Requests</S.StatLabel>
                   <S.StatValue>{selectedRepo.details.pullRequests}</S.StatValue>
                 </S.StatBox>
               </S.StatsGrid>
             </S.ModalSection>

             <S.ModalFooter>
               <S.ViewButton href={selectedRepo.url} target="_blank" rel="noopener noreferrer">
                 View on GitHub
               </S.ViewButton>
             </S.ModalFooter>
           </S.ModalBody>
         </S.ModalContent>
       </S.Modal>
     )}
   </S.Container>
 );
};