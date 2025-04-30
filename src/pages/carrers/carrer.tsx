import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
`;

const BannerSlider = styled.div`
  margin-bottom: 2rem;
  
  .swiper {
    width: 100%;
    height: 300px;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SearchBox = styled.div`
  padding: 1.5rem;
  background-color: ${props => props.theme.colors.gray100};
  border-radius: 0.5rem;
`;

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.gray300};
  border-radius: 0.25rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.gray300};
  border-radius: 0.25rem;
`;

const CategoryList = styled.div`
  margin: 2rem 0;
`;

const CategoryScroll = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`;

const CategoryButton = styled.button<{ active?: boolean }>`
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.gray200};
  color: ${props => props.active ? '#fff' : props.theme.colors.gray700};
`;

const ResultCount = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const JobCard = styled.div`
  border: 1px solid ${props => props.theme.colors.gray300};
  border-radius: 0.5rem;
  padding: 1rem;
  transition: box-shadow 0.2s;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const JobImage = styled.div`
  height: 10rem;
  background-color: ${props => props.theme.colors.gray200};
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

const JobTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const JobCareer = styled.div`
  color: ${props => props.theme.colors.gray600};
  margin-bottom: 0.5rem;
`;

const JobLanguage = styled.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: ${props => props.theme.colors.blue100};
  color: ${props => props.theme.colors.blue600};
  border-radius: 0.25rem;
`;

export function CarrersPage(): React.ReactElement {
  const navigate = useNavigate();
  
  const job = {
    id: 1,
    // ... 다른 job 데이터
  };

  return (
    <Container>
      <BannerSlider>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="채용 배너 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="채용 배너 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="채용 배너 3" />
          </SwiperSlide>
        </Swiper>
      </BannerSlider>

      <SearchBox>
        <SearchGrid>
          <SearchItem>
            <Label>직군</Label>
            <Select>
              <option>전체</option>
              <option>개발</option>
              <option>디자인</option>
              <option>기획</option>
            </Select>
          </SearchItem>
          <SearchItem>
            <Label>경력</Label>
            <Select>
              <option>전체</option>
              <option>신입</option>
              <option>1-3년</option>
              <option>4-7년</option>
              <option>8년 이상</option>
            </Select>
          </SearchItem>
          <SearchItem>
            <Label>지역</Label>
            <Select>
              <option>전체</option>
              <option>서울</option>
              <option>경기</option>
              <option>인천</option>
            </Select>
          </SearchItem>
          <SearchItem>
            <Label>키워드</Label>
            <Input type="text" placeholder="검색어 입력" />
          </SearchItem>
          <SearchItem>
            <Label>스킬</Label>
            <Input type="text" placeholder="기술스택 입력" />
          </SearchItem>
        </SearchGrid>
      </SearchBox>

      <CategoryList>
        <CategoryScroll>
          <CategoryButton active>오늘의 채용 공고</CategoryButton>
          <CategoryButton>대기업</CategoryButton>
          <CategoryButton>중견기업</CategoryButton>
          <CategoryButton>유니콘</CategoryButton>
          <CategoryButton>중소기업</CategoryButton>
          <CategoryButton>스타트업</CategoryButton>
          <CategoryButton>외국계</CategoryButton>
        </CategoryScroll>
      </CategoryList>

      <ResultCount>검색 결과: 1000건</ResultCount>

      <JobGrid>
        <JobCard>
          <JobImage />
          <JobTitle>제목</JobTitle>
          <JobCareer>경력</JobCareer>
          <JobLanguage>Java</JobLanguage>
        </JobCard>
        <JobCard onClick={() => navigate(`/carrers/${job.id}`)}>
          <JobImage />
          <JobTitle>제목</JobTitle>
          <JobCareer>경력</JobCareer>
          <JobLanguage>Node.js</JobLanguage>
        </JobCard>
        <JobCard>
          <JobImage />
          <JobTitle>제목</JobTitle>
          <JobCareer>경력</JobCareer>
          <JobLanguage>Node.js</JobLanguage>
        </JobCard>
        <JobCard>
          <JobImage />
          <JobTitle>제목</JobTitle>
          <JobCareer>경력</JobCareer>
          <JobLanguage>Node.js</JobLanguage>
        </JobCard>
      </JobGrid>
    </Container>
  );
}
