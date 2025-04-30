import * as Organism from "@/shared/atomic/organisms";
import * as S from "./styles";

export function RegistrationLayout() {
  return (
    <S.Container>
      <S.LeftSection>
        <S.ContentWrapper>
          <Organism.BasicPersonalInformation />
          <Organism.Requirement />
        </S.ContentWrapper>
      </S.LeftSection>
      
      <S.Divider />
      
      <S.RightSection>
        <S.ContentWrapper>
          <Organism.AgreementServiceUsage />
        </S.ContentWrapper>
      </S.RightSection>
    </S.Container>
  );
}