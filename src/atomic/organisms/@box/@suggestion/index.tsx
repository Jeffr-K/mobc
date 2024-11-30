import * as S from './styles';

interface SuggestionProps {
  children?: React.ReactNode;
}

export const Suggestion = ({ children }: SuggestionProps) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}

