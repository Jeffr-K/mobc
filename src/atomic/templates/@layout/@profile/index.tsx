import * as S from './styles';
import { Analytics } from '@/atomic/organisms/@box/@analytics';
import { Company } from '@/atomic/organisms/@box/@company';
import { Introduction } from '@/atomic/organisms/@box/@introduction';
import { Professional } from '@/atomic/organisms/@box/@professional';
import { Experience } from '@/atomic/organisms/@box/@experience';
import { Activity } from '@/atomic/organisms/@box/@activity';
import { Spotlight } from '@/atomic/organisms/@box/@spotlight';
import { Suggestion } from '@/atomic/organisms/@box/@suggestion';

interface ProfileLayoutProps {
  children?: React.ReactNode;
}

const companyData = [
  {
    id: '1',
    name: 'Company A',
    role: 'Software Engineer',
    period: '2020 - Present',
    logo: '/company-a-logo.png'
  },
  {
    id: '2',
    name: 'Company B',
    role: 'Frontend Developer',
    period: '2018 - 2020'
  }
];

export function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <S.Container>
      <S.LeftSidebar>
        <Analytics />
        <Company companyData={companyData} />
      </S.LeftSidebar>

      <S.MainContent>
        <Introduction />
        <Professional />
        <Experience>{children}</Experience>
        <Activity>{children}</Activity>
      </S.MainContent>

      <S.RightSidebar>
        <Spotlight />
        <Suggestion />
      </S.RightSidebar>
    </S.Container>
  )
}