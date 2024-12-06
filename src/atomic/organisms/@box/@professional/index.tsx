import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useQueryProfileHook } from '@/platforms/member/modules/profile/api/hooks';
import { useProfileStore } from '@/platforms/member/modules/profile/atom/atoms';
import { LoadingSpinner } from '@/atomic/molecules/@loading';
import { Error } from '@/atomic/molecules/@error';

export const Professional = () => { 
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
          {skill.stacks?.map((stack, index) => (
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