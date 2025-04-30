import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { LoadingSpinner } from '@/shared/atomic/molecules/@loading';
import { Error } from '@/shared/atomic/molecules/@error';
import { useQueryProfileHook } from '@/entities/user/interface/profile.hooks';
import { useProfileStore } from '@/entities/user/adapter/profile.atoms';

export const Skill = () => { 
  const hook = useQueryProfileHook();
  const { profile } = useProfileStore();

  if (hook.isLoading) return <LoadingSpinner />
  if (hook.isError) return <Error />
  if (!profile) return null;

  const { skill } = profile;

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
          {skill.techSkills?.map((stack, index) => (
            <SwiperSlide key={index}>
              <S.SkillCard>
                <S.SkillLogo src={stack.image} alt={stack.name} />
                <S.SkillLabel>{stack.name}</S.SkillLabel>
              </S.SkillCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.CarouselContainer>
    </S.Container>
  );
};