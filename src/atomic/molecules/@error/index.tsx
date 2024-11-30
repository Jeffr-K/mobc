import * as S from './styles';

interface ErrorProps {
  message?: string;
}

export const Error = ({ message = '데이터를 불러오는데 실패했습니다.' }: ErrorProps) => {
  return (
    <S.Container>
      <S.Icon>⚠️</S.Icon>
      <S.Message>{message}</S.Message>
      <S.SubMessage>잠시 후 다시 시도해 주세요.</S.SubMessage>
    </S.Container>
  )
}
