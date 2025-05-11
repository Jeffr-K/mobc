import React, { ReactElement } from "react";
import { styled } from "styled-components";

/**
 * LoungeMainBanner
 * @description LoungeMainBanner is a component that displays a banner section with a title and description.
 * @returns {ReactElement} - A React element representing the banner section.
 */
export function LoungeMainBanner(): ReactElement {
  return (
    <BannerSection>
      <BannerContent>
        <h1>개발자들과 이야기를 나눠보세요</h1>
        <p>다양한 경험과 지식을 공유하는 공간입니다</p>
      </BannerContent>
    </BannerSection>
  );
}

export const BannerSection = styled.section`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 24px;
`;

export const BannerContent = styled.div`
  text-align: center;
  h1 {
    font-size: 32px;
    margin-bottom: 12px;
  }
  p {
    font-size: 18px;
    opacity: 0.9;
  }
`;
