import React from 'react';
import { theme } from '@/shared/common/theme/theme';
import * as Atom from '@/shared/atomic/atoms/index';


export function NameInput(
  props: Readonly<{ placeholder: string; $marginTop?: number }>,
): React.ReactElement {
  return (
    <>
      <Atom.Label name="이름" htmlFor="name" />
      <Atom.Input type="text" placeholder={props.placeholder} $marginTop={props.$marginTop} />
    </>
  );
}

export function BirthDateInput(
  props: Readonly<{ placeholder: string; $marginTop?: number }>,
): React.ReactElement {
  return (
    <>
      <Atom.Label
        name="Birth"
        htmlFor="birth-date"
        fontSize={12}
        fontWeight={400}
        color={theme.colors.gray400}
      />
      <Atom.Input type="text" placeholder={props.placeholder} $marginTop={props.$marginTop} />
    </>
  );
}
