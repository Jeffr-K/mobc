import * as Molecule from "@/atomic/molecules";
import * as S from "./styles";

export function BasicPersonalInformation() {
  return (
    <S.Container>
      <S.Content>
        <Molecule.Typography variant="h1" children="계정 정보" />
      </S.Content>
      <S.Content>
        <Molecule.EmailInput />
      </S.Content>
      <S.Content>
        <Molecule.PasswordInput />
      </S.Content>
      <S.Content>
        <Molecule.PasswordInputVerification />
      </S.Content>
    </S.Container>
  )
}