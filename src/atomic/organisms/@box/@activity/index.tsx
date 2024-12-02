import * as S from './styles';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const activities = [
 {
   id: 1,
   image: '/images/activity1.jpg',
   title: 'Tech Conference 2023',
   date: '2023.10.15',
   description: 'Presented new web development trends and best practices to over 500 developers.',
   details: {
     location: 'San Francisco, CA',
     role: 'Speaker',
     attendees: 500,
     topics: ['Web Development', 'Performance', 'Architecture'],
     highlights: [
       'Discussed modern web architecture',
       'Demonstrated performance optimization techniques',
       'Led Q&A session with audience'
     ]
   }
 },
 // 더 많은 활동 추가
];

export const Activity = () => {
 const [modalOpen, setModalOpen] = useState(false);
 const [selectedActivity, setSelectedActivity] = useState(null);

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
         {activities.map((activity) => (
           <SwiperSlide key={activity.id}>
             <S.ActivityCard onClick={() => handleActivityClick(activity)}>
               <S.ActivityImage src={activity.image} alt={activity.title} />
               <S.ActivityContent>
                 <S.ActivityTitle>{activity.title}</S.ActivityTitle>
                 <S.ActivityDate>{activity.date}</S.ActivityDate>
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
             <S.ModalDate>{selectedActivity.date}</S.ModalDate>
             <S.ModalDescription>{selectedActivity.description}</S.ModalDescription>
             
             <S.ModalDetails>
               <S.DetailItem>
                 <S.DetailLabel>Location</S.DetailLabel>
                 <S.DetailValue>{selectedActivity.details.location}</S.DetailValue>
               </S.DetailItem>
               <S.DetailItem>
                 <S.DetailLabel>Role</S.DetailLabel>
                 <S.DetailValue>{selectedActivity.details.role}</S.DetailValue>
               </S.DetailItem>
               <S.DetailItem>
                 <S.DetailLabel>Attendees</S.DetailLabel>
                 <S.DetailValue>{selectedActivity.details.attendees}</S.DetailValue>
               </S.DetailItem>
               
               <S.DetailItem>
                 <S.DetailLabel>Topics</S.DetailLabel>
                 <S.TopicsList>
                   {selectedActivity.details.topics.map((topic, index) => (
                     <S.TopicTag key={index}>{topic}</S.TopicTag>
                   ))}
                 </S.TopicsList>
               </S.DetailItem>
               
               <S.DetailItem>
                 <S.DetailLabel>Highlights</S.DetailLabel>
                 <S.HighlightsList>
                   {selectedActivity.details.highlights.map((highlight, index) => (
                     <S.HighlightItem key={index}>{highlight}</S.HighlightItem>
                   ))}
                 </S.HighlightsList>
               </S.DetailItem>
             </S.ModalDetails>
           </S.ModalBody>
         </S.ModalContent>
       </S.Modal>
     )}
   </S.Container>
 );
};