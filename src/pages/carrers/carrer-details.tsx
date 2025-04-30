import { styled } from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BookmarkPlusIcon } from "lucide-react";

export function CarrerDetailPage(): React.ReactElement {
  return (
    <Layout>
      <LeftSideBar>
        <SideBarSection>
          <ul>
            <li>+ 인재풀 등록하기</li>
            <li>+ 회사 인재상 확인하기</li>
            <li>+ 사내 커리어 사이트로 이동하기</li>
          </ul>
        </SideBarSection>
        <SideBarSection>
          <h4>Q&A</h4>
          <ul>
            <li>경력이 조금 모잘라요.</li>
            <li>코딩 인터뷰를 보시나요?</li>
            <li>장비 지원은 어떻게 되나요?</li>
          </ul>
        </SideBarSection>
      </LeftSideBar>

      <MainContent>
        <CarrerDetailHeaderBox>
          <HeaderContent>
            <HeaderLeft>
              <JobApplicationDeadline>D-10</JobApplicationDeadline>
              <JobApplicationStatus>구직중</JobApplicationStatus>
              <OrganizationName>두나무</OrganizationName>
            </HeaderLeft>
            <HeaderRight>
              <ApplyButton>지원하기</ApplyButton>
              <VerticalDivider />
              <BookmarkPlusIcon style={{ cursor: 'pointer' }} />
            </HeaderRight>
          </HeaderContent>
        </CarrerDetailHeaderBox>
        {/* 채용 공고 상세 회사 이미지 */}
        <ImageSection>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
          >
            <SwiperSlide>
              <CompanyImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="채용 공고 상세 회사 이미지 1" />
            </SwiperSlide>
          </Swiper>
        </ImageSection>

        {/* 채용 공고 상세 회사 정보 박스*/}
        <JobApplicationInfoBox>
          <InfoItem>
            <InfoLabel>Kind:</InfoLabel>
            <InfoValue>OnSite</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Work Type:</InfoLabel>
            <InfoValue>Full-Time</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Location:</InfoLabel>
            <InfoValue>Seoul, Korea</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Salary:</InfoLabel>
            <InfoValue>10,000,000 ~ 20,000,000</InfoValue>
          </InfoItem>
        </JobApplicationInfoBox>

        {/* 채용 공고 상세 정보 */}
        <JobApplicationDetailInfoBox>
          <DetailSection>
            <OrganizationDescription />
            <OrganizationMissionDescription />
          </DetailSection>
          <DetailSection>
            <JobResponsibilities />
            <MinimumQualifications />
            <PreferredQualifications />
          </DetailSection>
          <DetailSection>
            <JobApplicationProcess />
            <Benefits />
            <JobApplicationContactInfo />
          </DetailSection>
        </JobApplicationDetailInfoBox>
      </MainContent>

      <RightSideBar>
        <SideBarSection>
          <OrganizationInvestmentInfoBox />
        </SideBarSection>
        <SideBarSection>
          <MyApplyHistoryCheckBox />
        </SideBarSection>
        <SideBarSection>
          <OrganizationArticlesBox />
        </SideBarSection>
      </RightSideBar>
    </Layout>
  );
}

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: relative;
`;

export const LeftSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 1rem;  /* 6rem에서 1rem으로 변경 - MainContent의 margin-top과 동일하게 */
  height: calc(100vh - 3rem); /* 8rem에서 3rem으로 변경 */
  overflow-y: auto;
`;

export const RightSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 1rem;  /* 6rem에서 1rem으로 변경 - MainContent의 margin-top과 동일하게 */
  height: calc(100vh - 3rem); /* 8rem에서 3rem으로 변경 */
  overflow-y: auto;
`;

export const SideBarSection = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  position: relative;
  margin-top: 0;
`;

export const CarrerDetailHeaderBox = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: sticky;  
  top: 0;         // 2rem에서 0으로 변경
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #e0e0e0;
`;

export const ImageSection = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const CompanyImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const JobApplicationInfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
  color: #666;
`;

export const InfoValue = styled.span`
  color: #333;
`;

export const JobApplicationDetailInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const JobApplicationDeadline = styled.div`
  font-size: 1rem;
  color: #666;
`;

export const JobApplicationStatus = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #2ecc71;
`;

export const OrganizationName = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
`;

export const ApplyButton = styled.button`
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background: #2980b9;
  }
`;

export const BookmarkButton = styled.button`
  padding: 0.5rem 1rem;
  background: white;
  color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background: #f8f9fa;
  }
`;

export const OrganizationDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const OrganizationMissionDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const JobResponsibilities = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const MinimumQualifications = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const PreferredQualifications = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const Benefits = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const JobApplicationProcess = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const JobApplicationContactInfo = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

export const OrganizationInvestmentInfoBox = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const MyApplyHistoryCheckBox = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const OrganizationArticlesBox = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;