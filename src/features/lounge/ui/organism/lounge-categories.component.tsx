import React, { ReactElement, useEffect, useState } from "react";
import { styled } from "styled-components";
import { useCategoriesQueryHook } from "@/features/lounge/api/hooks";

export function LoungeCategories(): ReactElement {
  const { categories, isLoading, error } = useCategoriesQueryHook();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // 상위 카테고리만 필터링
  const mainCategories = categories.filter(cat => cat.parent === null);

  // 선택된 상위 카테고리의 하위 카테고리 필터링
  const subCategories = selectedCategory
    ? categories.filter(cat => {
        // parent가 number 타입인 경우
        if (typeof cat.parent === "number") {
          return cat.parent === selectedCategory;
        }
        // parent가 Category 객체인 경우
        if (cat.parent && typeof cat.parent === "object") {
          return cat.parent._id === selectedCategory;
        }
        return false;
      })
    : [];

  useEffect(() => {
    console.log("cateogories", categories);
    // 카테고리가 로드되면 첫 번째 상위 카테고리를 자동 선택
    if (mainCategories.length > 0 && !selectedCategory) {
      setSelectedCategory(mainCategories[0]._id);
    }
  }, [categories, selectedCategory]);

  if (isLoading) {
    return <CategoryLeft>카테고리를 불러오는 중...</CategoryLeft>;
  }

  if (error) {
    return <CategoryLeft>카테고리를 불러오는데 실패했습니다.</CategoryLeft>;
  }

  return (
    <CategoryLeft>
      <MainCategories>
        {mainCategories.map(category => (
          <MainCategoryButton
            key={category.identifier.uuid}
            selected={selectedCategory === category._id}
            onClick={() => setSelectedCategory(category._id)}
          >
            {category.name}
          </MainCategoryButton>
        ))}
      </MainCategories>
      <SubCategories>
        {subCategories.map(subCategory => (
          <SubCategoryTag key={subCategory.identifier.uuid}>{subCategory.name}</SubCategoryTag>
        ))}
      </SubCategories>
    </CategoryLeft>
  );
}

export const CategoryLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CategoryRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MainCategories = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const MainCategoryButton = styled.button<{ selected: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: ${props => (props.selected ? "#667eea" : "#f5f5f5")};
  color: ${props => (props.selected ? "white" : "#333")};
  transition: all 0.2s;

  &:hover {
    background: ${props => (props.selected ? "#667eea" : "#e5e5e5")};
  }
`;

export const SubCategories = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SubCategoryTag = styled.span`
  padding: 6px 12px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
    border-color: #999;
  }
`;
