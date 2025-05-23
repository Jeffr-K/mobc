import { styled } from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 gap: 24px;
 padding: 32px;
 border-radius: ${({ theme }) => theme.borderRadius.lg};
 background-color: ${({ theme }) => theme.colors.white};
 box-shadow: ${({ theme }) => theme.shadow.default};
 max-width: 800px;
 margin: 0 auto;
`;

export const Header = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-bottom: 16px;
`;

export const Title = styled.h2`
 font-size: 24px;
 font-weight: 600;
 color: ${({ theme }) => theme.colors.primary};
 margin: 0;
`;

export const CarouselContainer = styled.div`
 .skill-swiper {
   padding: 10px;
   
   .swiper-button-next,
   .swiper-button-prev {
     color: ${({ theme }) => theme.colors.primary};
     
     &:after {
       font-size: 20px;
     }
   }
 }
`;

export const SkillCard = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 12px;
 padding: 16px;
 border-radius: ${({ theme }) => theme.borderRadius.md};
 background-color: ${({ theme }) => theme.colors.gray50};
 transition: transform 0.2s ease;
 border: 1px solid black;
 
 &:hover {
   transform: translateY(-4px);
 }
`;

export const SkillLogo = styled.img`
 width: 48px;
 height: 48px;
 object-fit: contain;
`;

export const SkillLabel = styled.span`
 font-size: 14px;
 font-weight: 500;
 color: ${({ theme }) => theme.colors.gray700};
 text-align: center;
`;