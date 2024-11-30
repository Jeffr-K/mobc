import * as S from './styles';

interface SpotlightProps {
  children?: React.ReactNode;
}

export const Spotlight = ({ children }: SpotlightProps) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}