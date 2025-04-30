import * as S from './styles';

export const LoadingSpinner = () => {
  return (
    <S.Container>
      <S.Spinner />
      <S.Text>Loading...</S.Text>
    </S.Container>
  );
};
