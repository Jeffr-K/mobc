// @/atomic/molecules/@hotNews/index.tsx
import React, { useState, useEffect } from 'react';
import * as S from './styles';

interface NewsItem {
  id: number;
  title: string;
}

const newsItems: NewsItem[] = [
  { id: 1, title: "React 18 정식 출시, 새로운 기능 대거 추가" },
  { id: 2, title: "TypeScript 5.0 업데이트 주요 변경사항 공개" },
  { id: 3, title: "Next.js 14 발표, 더욱 강력해진 성능" },
  { id: 4, title: "새로운 상태관리 라이브러리 Jotai 2.0 출시" },
  { id: 5, title: "React Native for Web 성능 개선 사례 공개" },
];

const MAX_LENGTH = 40;

const truncateText = (text: string): string => {
  return text.length > MAX_LENGTH ? `${text.slice(0, MAX_LENGTH)}...` : text;
};

export const HotNews = (): React.ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Container>
      <S.NewsWrapper>
        {newsItems.map((news, index) => (
          <S.NewsText 
            key={news.id}
            style={{ 
              transform: `translateY(${(index - currentIndex) * 100}%)`,
              opacity: index === currentIndex ? 1 : 0
            }}
          >
            {truncateText(news.title)}
          </S.NewsText>
        ))}
      </S.NewsWrapper>
    </S.Container>
  );
};