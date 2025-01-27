import * as S from './styles';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { LoadingSpinner } from '@/atomic/molecules/@loading';
import { Error } from '@/atomic/molecules/@error';
import 'swiper/css';
import 'swiper/css/navigation';
import { useQueryProfileActivitiesHook } from '@/modules/member/modules/profile/api/hooks';
import { useProfileActivitiesStore } from '@/modules/member/modules/profile/atom/atoms';
import { Activity as IActivity } from '@/modules/member/modules/profile/api/types';

export const Activity = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const hook = useQueryProfileActivitiesHook();
  const { activities } = useProfileActivitiesStore();

  if (hook.isLoading) return <LoadingSpinner />
  if (hook.isError) return <Error />
  if (!activities?.length) return null;

  const handleActivityClick = (activity: IActivity) => {
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
          {activities.map((activity: IActivity) => (
            <SwiperSlide key={activity.id}>
              <S.ActivityCard onClick={() => handleActivityClick(activity)}>
                <S.ActivityContent>
                  <S.ActivityTitle>{activity.title}</S.ActivityTitle>
                  <S.ActivityDate>{new Date(activity.createdAt).toLocaleDateString()}</S.ActivityDate>
                  <S.ActivityDescription>{activity.description}</S.ActivityDescription>
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
                        {selectedActivity.details.topics.map((topic) => (
                          <S.TopicTag key={`topic-${topic}`}>{topic}</S.TopicTag>  // index 대신 topic 값 자체를 key로 사용
                        ))}
                      </S.TopicsList>
                    </S.DetailItem>
                  )}
                  {selectedActivity.details.highlights && (
                    <S.DetailItem>
                      <S.DetailLabel>Highlights</S.DetailLabel>
                      <S.HighlightsList>
                        {selectedActivity.details.highlights.map((highlight) => (
                          <S.HighlightItem key={`highlight-${highlight}`}>{highlight}</S.HighlightItem>  // index 대신 highlight 값 자체를 key로 사용
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