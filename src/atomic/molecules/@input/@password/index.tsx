import * as Atom from "@/atomic/atoms";

export function PasswordInput() {
  return (
    <>
      <Atom.Label name="비밀번호" htmlFor="password" />
      <Atom.Input type="password" placeholder="비밀번호를 입력해주세요." $marginTop={8} />
    </>
  )
}

export function PasswordInputVerification() {
  return (
    <>
      <Atom.Label name="비밀번호 확인" htmlFor="password-verification" />
      <Atom.Input type="password" placeholder="비밀번호를 입력해주세요." $marginTop={8} />
    </>
  )
}