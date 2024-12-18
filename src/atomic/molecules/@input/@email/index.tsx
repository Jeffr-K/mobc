import * as Atom from "@/atomic/atoms";
import * as S from './styles';

export function EmailInput() {
  return (
    <S.Container>
      <Atom.Label name="이메일" htmlFor="email" />
      <Atom.Input type="email" placeholder="이메일을 입력해주세요." $marginTop={8} />
      <S.DuplicateCheckButton>
        중복확인
      </S.DuplicateCheckButton>
    </S.Container>
  )
}