// Professional.tsx
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const Professional = () => {
 const skills = [
   { name: 'React', logo: '/images/react.svg' },
   { name: 'TypeScript', logo: '/images/typescript.svg' },
   { name: 'Node.js', logo: '/images/nodejs.svg' },
   { name: 'Python', logo: '/images/python.svg' },
   { name: 'AWS', logo: '/images/aws.svg' },
   { name: 'Docker', logo: '/images/docker.svg' },
   // 더 많은 기술 스택 추가
 ];

 return (
   <S.Container>
     <S.Header>
       <S.Title>Professional</S.Title>
     </S.Header>
     
     <S.CarouselContainer>
       <Swiper
         modules={[Navigation]}
         navigation
         slidesPerView={5}
         spaceBetween={20}
         className="skill-swiper"
       >
         {skills.map((skill, index) => (
           <SwiperSlide key={index}>
             <S.SkillCard>
               <S.SkillLogo src={skill.logo} alt={skill.name} />
               <S.SkillLabel>{skill.name}</S.SkillLabel>
             </S.SkillCard>
           </SwiperSlide>
         ))}
       </Swiper>
     </S.CarouselContainer>
   </S.Container>
 );
};