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
 margin-bottom: 24px;
`;

export const Title = styled.h2`
 font-size: 24px;
 font-weight: 600;
 color: ${({ theme }) => theme.colors.primary};
 margin: 0;
`;

export const CarouselContainer = styled.div`
 .swiper {
   padding: 10px;
 }

 .swiper-button-prev,
 .swiper-button-next {
   color: ${({ theme }) => theme.colors.primary};
   &::after {
     font-size: 24px;
   }
 }
`;

export const ActivityCard = styled.div`
 cursor: pointer;
 border-radius: ${({ theme }) => theme.borderRadius.md};
 overflow: hidden;
 background: white;
 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
 transition: transform 0.2s ease;

 &:hover {
   transform: translateY(-4px);
 }
`;

export const ActivityImage = styled.img`
 width: 100%;
 height: 160px;
 object-fit: cover;
`;

export const ActivityContent = styled.div`
 padding: 16px;
`;

export const ActivityTitle = styled.h3`
 font-size: 16px;
 font-weight: 600;
 margin: 0 0 8px 0;
 color: ${({ theme }) => theme.colors.gray900};
`;

export const ActivityDate = styled.span`
 font-size: 14px;
 color: ${({ theme }) => theme.colors.gray600};
 display: block;
 margin-bottom: 8px;
`;

export const ActivityDescription = styled.p`
 font-size: 14px;
 color: ${({ theme }) => theme.colors.gray700};
 margin: 0;
 line-height: 1.5;
 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;
 overflow: hidden;
`;

export const Modal = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 z-index: 1000;
`;

export const ModalOverlay = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
 position: relative;
 background: white;
 width: 90%;
 max-width: 600px;
 max-height: 90vh;
 border-radius: ${({ theme }) => theme.borderRadius.lg};
 overflow: hidden;
 z-index: 1;
`;

export const ModalCloseButton = styled.button`
 position: absolute;
 top: 16px;
 right: 16px;
 background: white;
 border: none;
 border-radius: 50%;
 width: 32px;
 height: 32px;
 font-size: 24px;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
 z-index: 2;

 &:hover {
   background: ${({ theme }) => theme.colors.gray100};
 }
`;

export const ModalImage = styled.img`
 width: 100%;
 height: 240px;
 object-fit: cover;
`;

export const ModalBody = styled.div`
 padding: 24px;
 overflow-y: auto;
 max-height: calc(90vh - 240px);
`;

export const ModalTitle = styled.h2`
 font-size: 24px;
 font-weight: 600;
 margin: 0 0 8px 0;
 color: ${({ theme }) => theme.colors.gray900};
`;

export const ModalDate = styled.span`
 font-size: 16px;
 color: ${({ theme }) => theme.colors.gray600};
 display: block;
 margin-bottom: 16px;
`;

export const ModalDescription = styled.p`
 font-size: 16px;
 line-height: 1.6;
 color: ${({ theme }) => theme.colors.gray800};
 margin-bottom: 24px;
`;

export const ModalDetails = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
`;

export const DetailItem = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;
`;

export const DetailLabel = styled.span`
 font-size: 14px;
 font-weight: 600;
 color: ${({ theme }) => theme.colors.gray600};
`;

export const DetailValue = styled.span`
 font-size: 16px;
 color: ${({ theme }) => theme.colors.gray900};
`;

export const TopicsList = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 8px;
`;

export const TopicTag = styled.span`
 padding: 4px 12px;
 background: ${({ theme }) => theme.colors.primary + '15'};
 color: ${({ theme }) => theme.colors.primary};
 border-radius: 16px;
 font-size: 14px;
`;

export const HighlightsList = styled.ul`
 margin: 0;
 padding-left: 20px;
`;

export const HighlightItem = styled.li`
 font-size: 16px;
 color: ${({ theme }) => theme.colors.gray800};
 margin-bottom: 8px;
 line-height: 1.5;

 &:last-child {
   margin-bottom: 0;
 }
`;