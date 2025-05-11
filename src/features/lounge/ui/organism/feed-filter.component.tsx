import React, { ReactElement, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { feeds } from "./feeds";
import { styled } from "styled-components";

type FilterType = "최신순" | "인기순" | "조회순";

export function FeedFilter(): ReactElement {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<FilterType>("최신순");

  return (
    <FilterSection>
      <SearchResult>피드 {feeds.length}건</SearchResult>
      <FilterDropdown>
        <FilterButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
          {currentFilter}
          <FaChevronDown />
        </FilterButton>
        <DropdownMenu isOpen={isFilterOpen}>
          <DropdownItem
            isSelected={currentFilter === "최신순"}
            onClick={() => {
              setCurrentFilter("최신순");
              setIsFilterOpen(false);
            }}
          >
            최신순
          </DropdownItem>
          <DropdownItem
            isSelected={currentFilter === "인기순"}
            onClick={() => {
              setCurrentFilter("인기순");
              setIsFilterOpen(false);
            }}
          >
            인기순
          </DropdownItem>
          <DropdownItem
            isSelected={currentFilter === "조회순"}
            onClick={() => {
              setCurrentFilter("조회순");
              setIsFilterOpen(false);
            }}
          >
            조회순
          </DropdownItem>
        </DropdownMenu>
      </FilterDropdown>
    </FilterSection>
  );
}

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-right: 0;
`;

export const SearchResult = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;

export const FilterDropdown = styled.div`
  position: relative;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background: white;
  color: #495057;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
  }

  svg {
    font-size: 12px;
  }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  margin-right: 24px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: ${props => (props.isOpen ? "block" : "none")};
  z-index: 10;
  min-width: 120px;
`;

export const DropdownItem = styled.button<{ isSelected?: boolean }>`
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: ${props => (props.isSelected ? "#f8f9fa" : "white")};
  color: ${props => (props.isSelected ? "#228be6" : "#495057")};
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #f8f9fa;
  }
`;
