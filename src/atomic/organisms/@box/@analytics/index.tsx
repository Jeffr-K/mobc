import { useAnalyticsHook } from '@/modules/member/modules/profile/api/hooks';
import * as S from './styles';
import { useAnalyticsStore } from '@/modules/member/modules/profile/atom/atoms';
import { LoadingSpinner } from '@/atomic/molecules/@loading';
import { Error } from '@/atomic/molecules/@error';

export const Analytics = () => {
  const hook = useAnalyticsHook('userId');
  const store = useAnalyticsStore();

  if (hook.isLoading) return <LoadingSpinner />
  if (hook.isError) return <Error />

  return (
    <S.Container>
      <S.Title>Analytics</S.Title>

      <S.Statisticses>
        <S.Statistics>
          <S.StatisticsLabel>Views</S.StatisticsLabel>
          <S.StatisticsValue>{store.analytics.totalViews.toLocaleString()}</S.StatisticsValue>
        </S.Statistics>

        <S.Statistics>
          <S.StatisticsLabel>프로필 순위</S.StatisticsLabel>
          <S.StatisticsValue>{store.analytics.profileRank.toLocaleString()}</S.StatisticsValue>
        </S.Statistics>

        <S.Statistics>
          <S.StatisticsLabel>검색 노출</S.StatisticsLabel>
          <S.StatisticsValue>{store.analytics.appearance.toLocaleString()}</S.StatisticsValue>
        </S.Statistics>
      </S.Statisticses>
    </S.Container>
  )
};
