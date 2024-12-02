import * as S from './styles';

export const Background = () => {
  return (
    <S.Container>
      <S.GradientBackground>
        <S.BannerContent>
          <S.ProfileImage src="/default-profile.jpg" alt="Profile" />
          <S.BannerInfo>
            <S.Name>Jeffrey Kim</S.Name>
            <S.Position>Senior Software Engineer</S.Position>
          </S.BannerInfo>
        </S.BannerContent>
      </S.GradientBackground>
    </S.Container>
  );
 };