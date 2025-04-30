import * as S from './styles';
import { useState } from 'react';
import { LoadingSpinner } from '@/shared/atomic/molecules/@loading';
import { Error } from '@/shared/atomic/molecules/@error';
import { useQueryProfileGaragesHook } from '@/entities/user/interface/profile.hooks';
import { useProfileGarageStore } from '@/entities/user/adapter/profile.atoms';

export const Garage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const { isLoading, isError } = useQueryProfileGaragesHook();
  const { garages } = useProfileGarageStore();

  if (isLoading) return <LoadingSpinner />
  if (isError) return <Error />
  if (!garages) return null;
  
  if (!garages.length) return null;

  const handleRepoClick = (e, repo) => {
    e.preventDefault();
    setSelectedRepo(repo);
    setModalOpen(true);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Garage</S.Title>
      </S.Header>
      
      <S.Grid>
        {garages.map((garage, index) => (
          <S.RepoCard 
            key={index} 
            href={garage.url ? garage.url : ''} 
            onClick={(e) => handleRepoClick(e, garage)}
          >
            <S.RepoHeader>
              <S.RepoName>{garage.title}</S.RepoName>
              <S.RepoVisibility>Public</S.RepoVisibility>
            </S.RepoHeader>
            
            <S.RepoDescription>{garage.description}</S.RepoDescription>
            
            <S.RepoFooter>
              <S.RepoLanguage>
                <S.LanguageIcon />
                    {garage.language ? garage.language : ''}
              </S.RepoLanguage>
              
              <S.RepoStats>
                <S.StatItem>
                  <S.StarIcon />
                  {garage.stars ? garage.stars : ''}
                </S.StatItem>
                <S.StatItem>
                  <S.ForkIcon />
                  {garage.forks ? garage.forks : ''}
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
                  {selectedRepo.details?.technologies?.map((tech, index) => (
                    <S.Tag key={index}>{tech}</S.Tag>
                  ))}
                </S.TagList>
              </S.ModalSection>

              <S.ModalSection>
                <S.SectionTitle>Key Features</S.SectionTitle>
                <S.FeatureList>
                  {selectedRepo.details?.features?.map((feature, index) => (
                    <S.FeatureItem key={index}>{feature}</S.FeatureItem>
                  ))}
                </S.FeatureList>
              </S.ModalSection>
            </S.ModalBody>      
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};