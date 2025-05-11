import { FileText } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export function FeedWriterButton({ children }): React.ReactElement {
  const navigate = useNavigate();

  return (
    <WriteButton onClick={() => navigate("/community/write")}>
      <FileText size={16} />
      {children}
    </WriteButton>
  );
}

export const WriteButton = styled.button`
  padding: 8px 24px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background: #5a6fd6;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
