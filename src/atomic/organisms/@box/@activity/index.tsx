import * as S from './styles';

interface ActivityProps {
  children?: React.ReactNode;
}

export const Activity = ({ children }: ActivityProps) => {
  return (
    <S.Container>
      <S.Title>Activity</S.Title>
      {children}
    </S.Container>
  )
}