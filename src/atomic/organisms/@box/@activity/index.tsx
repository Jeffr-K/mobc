import * as S from './styles';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useQueryProfileHook } from '@/platforms/member/modules/profile/api/hooks';
import { useProfileStore } from '@/platforms/member/modules/profile/atom/atoms';
import { LoadingSpinner } from '@/atomic/molecules/@loading';
import { Error } from '@/atomic/molecules/@error';
import 'swiper/css';
import 'swiper/css/navigation';

export const Activity = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const hook = useQueryProfileHook();
  const { profile } = useProfileStore();

  if (hook.isLoading) return <LoadingSpinner />
  if (hook.isError) return <Error />
  if (!profile) return null;

  const { activity } = profile;
  if (!activity?.item?.length) return null;

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setModalOpen(true);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Activity</S.Title>
      </S.Header>

      <S.CarouselContainer>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
        >
          {activity.item.map((item) => (
            <SwiperSlide key={item.id}>
              <S.ActivityCard onClick={() => handleActivityClick(item)}>
                <S.ActivityImage src={item.image} alt={item.title} />
                <S.ActivityContent>
                  <S.ActivityTitle>{item.title}</S.ActivityTitle>
                  <S.ActivityDate>{new Date(item.createdAt).toLocaleDateString()}</S.ActivityDate>
                  <S.ActivityDescription>{item.description}</S.ActivityDescription>
                </S.ActivityContent>
              </S.ActivityCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CarouselContainer>

      {modalOpen && selectedActivity && (
        <S.Modal>
          <S.ModalOverlay onClick={() => setModalOpen(false)} />
          <S.ModalContent>
            <S.ModalCloseButton onClick={() => setModalOpen(false)}>×</S.ModalCloseButton>
            <S.ModalImage src={selectedActivity.image} alt={selectedActivity.title} />
            <S.ModalBody>
              <S.ModalTitle>{selectedActivity.title}</S.ModalTitle>
              <S.ModalDate>{new Date(selectedActivity.createdAt).toLocaleDateString()}</S.ModalDate>
              <S.ModalDescription>{selectedActivity.description}</S.ModalDescription>
              
              {selectedActivity.details && (
                <S.ModalDetails>
                  {selectedActivity.details.location && (
                    <S.DetailItem>
                      <S.DetailLabel>Location</S.DetailLabel>
                      <S.DetailValue>{selectedActivity.details.location}</S.DetailValue>
                    </S.DetailItem>
                  )}
                  {selectedActivity.details.role && (
                    <S.DetailItem>
                      <S.DetailLabel>Role</S.DetailLabel>
                      <S.DetailValue>{selectedActivity.details.role}</S.DetailValue>
                    </S.DetailItem>
                  )}
                  {selectedActivity.details.attendees && (
                    <S.DetailItem>
                      <S.DetailLabel>Attendees</S.DetailLabel>
                      <S.DetailValue>{selectedActivity.details.attendees}</S.DetailValue>
                    </S.DetailItem>
                  )}
                  
                  {selectedActivity.details.topics && (
                    <S.DetailItem>
                      <S.DetailLabel>Topics</S.DetailLabel>
                      <S.TopicsList>
                        {selectedActivity.details.topics.map((topic, index) => (
                          <S.TopicTag key={index}>{topic}</S.TopicTag>
                        ))}
                      </S.TopicsList>
                    </S.DetailItem>
                  )}
                  
                  {selectedActivity.details.highlights && (
                    <S.DetailItem>
                      <S.DetailLabel>Highlights</S.DetailLabel>
                      <S.HighlightsList>
                        {selectedActivity.details.highlights.map((highlight, index) => (
                          <S.HighlightItem key={index}>{highlight}</S.HighlightItem>
                        ))}
                      </S.HighlightsList>
                    </S.DetailItem>
                  )}
                </S.ModalDetails>
              )}
            </S.ModalBody>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};