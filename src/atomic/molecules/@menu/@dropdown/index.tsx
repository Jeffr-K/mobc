import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useMutationLogoutHook } from '@/modules/member/modules/auth/api/hooks';

export function DropdownMenu(): React.ReactElement {
  const navigate = useNavigate();
  const logoutMutation = useMutationLogoutHook();

  const handleMyProfileClick = () => {
    navigate('/profile');
  }

  const handleLogoutClick = async () => {
    try {
      await logoutMutation.mutateAsync({});
      window.location.href = '/'; // 페이지 새로고침 + 리로드
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Container>
      <MenuItem onClick={handleMyProfileClick}>내 프로필</MenuItem>
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