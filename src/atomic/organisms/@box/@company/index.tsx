import * as S from './styles';

interface CompanyData {
  id: string;
  name: string;
  role?: string;
  period?: string;
  logo?: string;
}

interface CompanyProps {
  companyData: CompanyData[];
}

export const Company = ({ companyData = [] }: CompanyProps) => {
  return (
    <S.Container>
      <S.Title>Followes</S.Title>
      <S.Companies>
        {companyData.map((company) => (
          <S.CompanyItem key={company.id}>
            <S.CompanyLogo>
              <img src={company.logo} alt={`${company.name} logo`} />
            </S.CompanyLogo>
            <S.CompanyName>{company.name}</S.CompanyName>
          </S.CompanyItem>
        ))}
      </S.Companies>
    </S.Container>
  )
}