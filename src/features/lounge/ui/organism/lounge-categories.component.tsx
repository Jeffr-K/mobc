import React, { ReactElement, useEffect } from "react";
import { styled } from "styled-components";
import {
  categoriesLoadableAtom,
  parentCategoriesAtom,
  selectedCategoryAtom,
  childCategoriesAtom,
  selectedSubCategoryAtom,
} from "@/features/lounge/infrastructure/adapter/category.adapter";
import { useAtom, useAtomValue } from "jotai";

export function LoungeCategories(): ReactElement {
  const ALL_CATEGORIES_ID = 0;

  const categoriesLoadable = useAtomValue(categoriesLoadableAtom);
  const parentCategories = useAtomValue(parentCategoriesAtom);
  const childCategories = useAtomValue(childCategoriesAtom);

  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedSubCategory, setSelectedSubCategory] = useAtom(selectedSubCategoryAtom);

  useEffect(() => {
    if (parentCategories.length > 0 && selectedCategory === null) {
      setSelectedCategory(ALL_CATEGORIES_ID);
      setSelectedSubCategory(null);
    }
  }, [parentCategories, selectedCategory, setSelectedCategory, setSelectedSubCategory]);

  if (categoriesLoadable.state === "loading") {
    return <CategoryLeft>카테고리를 불러오는 중...</CategoryLeft>;
  }

  if (categoriesLoadable.state === "hasError") {
    console.error("카테고리 로드 오류:", categoriesLoadable.error);
    return <CategoryLeft>카테고리를 불러오는데 실패했습니다.</CategoryLeft>;
  }

  if (categoriesLoadable.state === "hasData" && parentCategories.length === 0) {
    return <CategoryLeft>사용 가능한 카테고리가 없습니다.</CategoryLeft>;
  }

  const handleCategorySelect = (categoryId: number) => {
    // 현재 선택된 상위 카테고리를 다시 클릭한 경우 (토글)
    if (selectedCategory === categoryId) {
      // 상위 카테고리 선택 취소 (모든 카테고리 표시)
      setSelectedCategory(null);
    } else {
      // 새로운 상위 카테고리 선택
      setSelectedCategory(categoryId);
    }

    // 하위 카테고리 선택 초기화
    setSelectedSubCategory(null);
  };

  // 하위 카테고리 선택 핸들러
  const handleSubCategorySelect = (subCategoryId: number) => {
    // 현재 선택된 하위 카테고리를 다시 클릭한 경우 (토글)
    if (selectedSubCategory === subCategoryId) {
      // 하위 카테고리 선택 취소 (상위 카테고리만 선택된 상태로)
      setSelectedSubCategory(null);
    } else {
      // 새로운 하위 카테고리 선택
      setSelectedSubCategory(subCategoryId);
    }
  };

  return (
    <CategoryLeft>
      <MainCategories>
        {/* 전체 카테고리 버튼 (선택 사항) */}
        <MainCategoryButton
          selected={selectedCategory === null}
          onClick={() => {
            setSelectedCategory(ALL_CATEGORIES_ID);
            setSelectedSubCategory(null);
          }}
        >
          전체
        </MainCategoryButton>

        {/* 상위 카테고리 목록 */}
        {parentCategories.map(parentCategory => (
          <MainCategoryButton
            key={parentCategory._id}
            selected={selectedCategory === parentCategory._id}
            onClick={() => handleCategorySelect(parentCategory._id)}
          >
            {parentCategory.name}
          </MainCategoryButton>
        ))}
      </MainCategories>

      {/* 하위 카테고리가 있고 상위 카테고리가 선택된 경우에만 표시 */}
      {selectedCategory !== null && selectedCategory !== ALL_CATEGORIES_ID && childCategories.length > 0 && (
        <SubCategories>
          {childCategories.map(childCategory => (
            <SubCategoryTag
              key={childCategory._id}
              selected={selectedSubCategory === childCategory._id}
              onClick={() => handleSubCategorySelect(childCategory._id)}
            >
              {childCategory.name}
            </SubCategoryTag>
          ))}
        </SubCategories>
      )}
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

export const SubCategoryTag = styled.span<{ selected?: boolean }>`
  padding: 6px 12px;
  background: ${props => (props.selected ? "#667eea" : "white")};
  color: ${props => (props.selected ? "white" : "#666")};
  border: 1px solid ${props => (props.selected ? "#667eea" : "#ddd")};
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => (props.selected ? "#667eea" : "#f5f5f5")};
    border-color: ${props => (props.selected ? "#667eea" : "#999")};
  }
`;
