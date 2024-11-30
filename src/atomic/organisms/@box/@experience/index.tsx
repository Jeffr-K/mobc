import * as S from './styles';

interface ExperienceProps {
  children?: React.ReactNode;
}

export const Experience = ({ children }: ExperienceProps) => {
  return (
    <S.Container>
      <S.Title>Experience</S.Title>
    </S.Container>
  )
}