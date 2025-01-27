import { LoadingSpinner } from '@/atomic/molecules/@loading';
import { Error } from '@/atomic/molecules/@error';
import * as S from './styles';
import { useQueryProfileHook } from '@/modules/member/modules/profile/api/hooks';
import { useProfileStore } from '@/modules/member/modules/profile/atom/atoms';

export const Persona = () => {
  const hook = useQueryProfileHook();
  const { profile } = useProfileStore();

  if (hook.isLoading) return <LoadingSpinner />;
  if (hook.isError) return <Error />;
  if (!profile) return null;

  const { persona } = profile;

  return (
    <S.Container>
      <S.Header>
        <S.Title>Persona</S.Title>
        <S.StatusBadge>{persona.personal}</S.StatusBadge>
      </S.Header>

      <S.Section>
        <S.Nickname>{profile.user.username}</S.Nickname>
        <S.Text>{persona.summary}</S.Text>
      </S.Section>

      <S.InfoGrid>
        <S.InfoItem>
          <S.Label>Location</S.Label>
          <S.Text>{persona.location}</S.Text>
        </S.InfoItem>
        <S.InfoItem>
          <S.Label>Cave</S.Label>
          <S.Text>{persona.cave}</S.Text>
        </S.InfoItem>
      </S.InfoGrid>

      <S.Section>
        <S.Label>Identity</S.Label>
        <S.Text>{persona.identity}</S.Text>
      </S.Section>

      <S.Section>
        <S.Label>Description</S.Label>
        <S.Text>{persona.description}</S.Text>
      </S.Section>

      <S.Section>
        <S.Label>Interests</S.Label>
        <S.Text>{persona.interests?.join(', ') || '-'}</S.Text>
      </S.Section>
    </S.Container>
  );
};