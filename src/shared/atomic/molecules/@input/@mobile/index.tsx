import * as Atom from "@/shared/atomic/atoms";

export function MobileInput(props: { placeholder: string, $marginTop?: number }): React.ReactElement {
  return (
    <>
      <Atom.Label name="휴대폰 번호" htmlFor="mobile" />
      <Atom.Input type="text" placeholder={props.placeholder} $marginTop={props.$marginTop} />
    </>
  )
}