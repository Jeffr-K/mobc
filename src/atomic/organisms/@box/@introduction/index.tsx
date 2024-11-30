import { LoadingSpinner } from '@/atomic/molecules/@loading';
import { Error } from '@/atomic/molecules/@error';
import * as S from './styles';
import { useIntroductionHook } from '@/platforms/member/modules/profile/api/hooks';
import { useIntroductionStore } from '@/platforms/member/modules/profile/atom/atoms';

export const Introduction = () => {
  const hook = useIntroductionHook('userId');
  const store = useIntroductionStore();

  if (hook.isLoading) return <LoadingSpinner />
  if (hook.isError) return <Error />

  const { introduction } = store;

  return (
    <S.Container>
      <S.Header>
        <S.Title>Persona</S.Title>
        <S.StatusBadge>{introduction.status}</S.StatusBadge>
      </S.Header>

      <S.Section>
        <S.Nickname>{introduction.nickname}</S.Nickname>
        <S.Text>{introduction.summary}</S.Text>
      </S.Section>

      <S.InfoGrid>
        <S.InfoItem>
          <S.Label>Location</S.Label>
          <S.Text>{introduction.location}</S.Text>
        </S.InfoItem>
        <S.InfoItem>
          <S.Label>Cave</S.Label>
          <S.Text>{introduction.cave}</S.Text>
        </S.InfoItem>
      </S.InfoGrid>

      <S.Section>
        <S.Label>Identity</S.Label>
        <S.Text>{introduction.identity}</S.Text>
      </S.Section>

      <S.Section>
        <S.Label>Persona</S.Label>
        <S.Text>{introduction.persona}</S.Text>
      </S.Section>

      <S.Section>
        <S.Label>Interests</S.Label>
        <S.Text>{introduction.interest}</S.Text>
      </S.Section>
    </S.Container>
  );
};