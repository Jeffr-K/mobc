import React, { ReactElement, useEffect } from "react";
import { styled } from "styled-components";
import {
  categoriesLoadableAtom,
  parentCategoriesAtom,
  selectedCategoryAtom,
  childCategoriesAtom,
} from "@/features/lounge/adapter/category.adapter";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

export function LoungeCategories(): ReactElement {
  const [categoriesLoadable] = useAtom(categoriesLoadableAtom);
  const parentCategories = useAtomValue(parentCategoriesAtom);
  const childCategories = useAtomValue(childCategoriesAtom);

  // selectedCategoryAtom을 읽기와 쓰기로 분리
  const selectedCategory = useAtomValue(selectedCategoryAtom);
  const setSelectedCategory = useSetAtom(selectedCategoryAtom);

  useEffect(() => {
    // 카테고리가 로드되면 첫 번째 상위 카테고리를 자동 선택
    if (parentCategories.length > 0 && !selectedCategory) {
      setSelectedCategory(parentCategories[0]._id);
    }
  }, [parentCategories, selectedCategory, setSelectedCategory]);

  // loadable 상태에 따른 렌더링
  if (categoriesLoadable.state === "loading") {
    return <CategoryLeft>카테고리를 불러오는 중...</CategoryLeft>;
  }

  if (categoriesLoadable.state === "hasError") {
    return <CategoryLeft>카테고리를 불러오는데 실패했습니다.</CategoryLeft>;
  }

  return (
    <CategoryLeft>
      <MainCategories>
        {parentCategories.map(parentCategory => (
          <MainCategoryButton
            key={parentCategory.identifier.uuid}
            selected={selectedCategory === parentCategory._id}
            onClick={() => setSelectedCategory(parentCategory._id)}
          >
            {parentCategory.name}
          </MainCategoryButton>
        ))}
      </MainCategories>
      <SubCategories>
        {childCategories.map(childCategory => (
          <SubCategoryTag key={childCategory.identifier.uuid}>{childCategory.name}</SubCategoryTag>
        ))}
      </SubCategories>
    </CategoryLeft>
  );
}

// 스타일 컴포넌트들은 그대로...
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
