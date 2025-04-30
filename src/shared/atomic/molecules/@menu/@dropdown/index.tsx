import { useMutationLogoutHook } from "@/entities/auth/interface/auth.hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface DropdownMenuProps {
  onClose: () => void;  // 드롭다운 닫기 함수 추가
}

export function DropdownMenu({ onClose }: DropdownMenuProps): React.ReactElement {
  const navigate = useNavigate();
  const logoutMutation = useMutationLogoutHook();

  const handleProfileClick = () => {
    navigate('/profile');  // 프로필 페이지로 이동
    onClose();  // 드롭다운 닫기
  };

  const handleLogoutClick = async () => {
    try {
      await logoutMutation.mutateAsync({});
      window.location.href = '/'; // 페이지 새로고침 + 리로드
    } catch (error) {
      console.error('Logout failed:', error);
    }
    onClose();  // 드롭다운 닫기
  };

  return (
    <Container>
      <MenuItem onClick={handleProfileClick}>내 프로필</MenuItem>
      <MenuItem onClick={handleLogoutClick}>로그아웃</MenuItem>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e0e0e0;
  padding: 10px;
  width: 150px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

const MenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray50};
  }
`;