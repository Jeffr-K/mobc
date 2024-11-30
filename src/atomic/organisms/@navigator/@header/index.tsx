import React, { useState } from 'react';

import { Menu } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IconButton } from '@/atomic/atoms/@icon/icon';
import { SearchInput } from '../../../molecules/@input/@search';
import { ProfileMenu } from '../../../molecules/@menu/@profile';
import { NotificationBell } from '../../../molecules/@notification/@bell';
import * as S from './styles';

const menus = [
  { path: '/', label: '홈' },
  { path: '/dashboard', label: '대시보드' },
  { path: '/products', label: '제품' },
  { path: '/about', label: '소개' },
];

export const Navigator = (): React.ReactElement => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [notificationCount] = useState(3);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <S.Nav>
      <S.MobileMenuButton>
        <IconButton icon={<Menu size={24} />} onClick={() => setIsMobileOpen(!isMobileOpen)} />
      </S.MobileMenuButton>

      <S.Logo>LOGO</S.Logo>

      <S.NavList $isMobileOpen={isMobileOpen}>
        {menus.map(menu => (
          <S.NavItem
            key={menu.path}
            $isActive={pathname === menu.path}
            onClick={() => {
              navigate(menu.path);
              setIsMobileOpen(false);
            }}
          >
            {menu.label}
          </S.NavItem>
        ))}
      </S.NavList>

      <S.RightSection>
        <SearchInput onChange={value => console.log('Search:', value)} />
        <NotificationBell count={notificationCount} onClick={() => navigate('/notifications')} />
        <ProfileMenu
          user={{
            name: 'John Doe',
            image: 'https://via.placeholder.com/32',
          }}
          onLogout={handleLogout}
          onSettings={handleSettings}
        />
      </S.RightSection>
    </S.Nav>
  );
};
