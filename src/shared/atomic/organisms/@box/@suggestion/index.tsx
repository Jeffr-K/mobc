// Suggestion/index.tsx
import * as S from './styles';

interface Suggestion {
 id: string;
 companyName: string;
 position: string;
 salary: string;
 date: string;
 isNew: boolean;
}

const recentSuggestions: Suggestion[] = [
 {
   id: '1',
   companyName: 'Google',
   position: 'Senior Frontend Engineer',
   salary: '1억 2천 ~ 1억 5천',
   date: '2024.03.28',
   isNew: true
 },
 {
   id: '2',
   companyName: 'Meta',
   position: 'Software Engineer',
   salary: '9천 ~ 1억 1천',
   date: '2024.03.27',
   isNew: true
 },
 // ... 더 많은 제안
];

export const Suggestion = () => {
 return (
   <S.Container>
     <S.Header>
       <S.Title>Recent Suggestions</S.Title>
       <S.Count>{recentSuggestions.length} new</S.Count>
     </S.Header>

     <S.List>
       {recentSuggestions.slice(0, 10).map((suggestion) => (
         <S.SuggestionItem key={suggestion.id}>
           <S.CompanyInfo>
             <S.CompanyName>{suggestion.companyName}</S.CompanyName>
             {suggestion.isNew && <S.NewBadge>New</S.NewBadge>}
           </S.CompanyInfo>
           
           <S.Position>{suggestion.position}</S.Position>
           <S.Salary>{suggestion.salary}</S.Salary>
           <S.Date>{suggestion.date}</S.Date>
         </S.SuggestionItem>
       ))}
     </S.List>

     <S.ViewMoreButton>
       View All Suggestions
     </S.ViewMoreButton>
   </S.Container>
 );
};