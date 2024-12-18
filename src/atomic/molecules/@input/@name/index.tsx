import * as Atom from "@/atomic/atoms";
import { theme } from "@/styles/theme";

export function NameInput(props: { placeholder: string, $marginTop?: number }): React.ReactElement {
  return (
    <>
      <Atom.Label name="이름" htmlFor="name" />
      <Atom.Input type="text" placeholder={props.placeholder} $marginTop={props.$marginTop} />
    </>
  )
}

export function BirthDateInput(props: { placeholder: string, $marginTop?: number }): React.ReactElement {
  return (
    <>
      <Atom.Label name="Birth" htmlFor="birth-date" fontSize={12} fontWeight={400} color={theme.colors.gray400} />
      <Atom.Input type="text" placeholder={props.placeholder} $marginTop={props.$marginTop} />
    </>
  )
}