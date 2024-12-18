import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import * as Atom from '../../../atoms';
import { 
  Grip, 
  Shell, 
  Search, 
  ScanSearch, 
  Mail, 
  Bell, 
  Settings,
  User as UserIcon,
  Coffee
} from 'lucide-react';
import * as S from './styles';
import { HotNews } from "@/atomic/molecules/@hotNews";
import { LoginModal } from "../../@modal/@login";
import { useMutationLoginHook } from '@/platforms/member/modules/auth/api/hooks';
import { useQueryUserHook } from '@/platforms/member/modules/user/api/hooks';
import { useAtom } from 'jotai';
import { userAtom } from '@/platforms/member/modules/user/atom/atoms';
import type { User } from '@/platforms/member/modules/user/api/types';
import { NotificationBox } from "@/atomic/organisms/@box/@notification";
import { MessageBox } from "@/atomic/organisms/@box/@message";
import { SearchBox } from "@/atomic/organisms/@box/@search";
import { useClickOutside } from '@/hooks/useClickOutside';

export const Navigator = (): React.ReactElement => {
  const navigate = useNavigate();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useAtom<User | null>(userAtom);
  const { userData, refetch } = useQueryUserHook();
  
  const loginMutation = useMutationLoginHook();
  
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    };
  
    const token = localStorage.getItem('accessToken');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      const parsedUser = JSON.parse(storedUser);
  
      // 현재 user 상태와 로컬 스토리지의 user가 다를 때만 업데이트
      if (!user || user.uuid !== parsedUser.uuid) {
        setUser(parsedUser);
      }
    } else if (token && userData) {
      // 현재 user 상태와 userData가 다를 때만 업데이트
      if (!user || user.uuid !== userData.uuid) {
        setUser(userData);
      }
    }
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [user, userData, setUser]);

  useClickOutside(searchRef, () => {
    if (isSearchOpen) setIsSearchOpen(false);
  });

  useClickOutside(messageRef, () => {
    if (isMessageOpen) setIsMessageOpen(false);
  });

  useClickOutside(notificationRef, () => {
    if (isNotificationOpen) setIsNotificationOpen(false);
  });

  const handleLocalLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await loginMutation.mutateAsync({ email, password });
      
      if (result.data?.accessToken) {
        localStorage.setItem('accessToken', result.data.accessToken);
        localStorage.setItem('refreshToken', result.data.refreshToken);
        
        const response = await refetch();
        if (response) {
          setUser(response.data);
          localStorage.setItem('user', JSON.stringify(response.data));
          setIsLoginModalOpen(false);
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const renderProfileSection = () => {
    if (!user?.uuid) {
      return (
        <S.LoginButton onClick={handleLoginClick}>
          로그인하기
        </S.LoginButton>
      );
    }

    return (
      <>
        <S.ProfileWrapper onClick={handleProfileClick}>
          <S.ProfileImage>
            <UserIcon size={24} />
          </S.ProfileImage>
          <S.ProfileName>{user.username || '사용자'}</S.ProfileName>
        </S.ProfileWrapper>
        
        <Atom.Divider />
        
        <S.IconWrapper onClick={handleSettingsClick}>
          <Settings size={20} />
        </S.IconWrapper>
      </>
    );
  };

  const handleLogoClick = () => navigate('/');
  const handleLoginClick = () => setIsLoginModalOpen(true);
  const handleCloseModal = () => setIsLoginModalOpen(false);
  const handleProfileClick = () => navigate('/profile');
  const handleSettingsClick = () => navigate('/settings');
  const handleLoungeClick = () => navigate('/lounge');
  const handleCaveClick = () => navigate("/cave")
  
  const handleMessageClick = () => {
    setIsMessageOpen(!isMessageOpen);
    if (!isMessageOpen) {
      setIsNotificationOpen(false);
      setIsSearchOpen(false);
    }
  };
  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (!isNotificationOpen) {
      setIsMessageOpen(false);
      setIsSearchOpen(false);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchOpen(true);
    setIsMessageOpen(false);
    setIsNotificationOpen(false);
  };

 
  return (
    <>
      <S.Container>
        <S.ContentWrapper>
          <S.Logo onClick={handleLogoClick}>PERSONA</S.Logo>
          <Atom.Divider />
          <S.IconWrapper>
            <Grip size={20} />
          </S.IconWrapper>
          <S.IconWrapper onClick={handleCaveClick}>
            <Shell size={20} />
          </S.IconWrapper>
          <S.IconWrapper onClick={handleLoungeClick}>
            <Coffee size={20} />
          </S.IconWrapper>
          <S.HotNewsWrapper>
            <HotNews />
          </S.HotNewsWrapper>
          <S.SearchWrapper ref={searchRef}>
            <S.SearchInput 
              placeholder="Search..." 
              onFocus={handleSearchFocus}
            />
            <Search size={20} />
            <SearchBox isOpen={isSearchOpen} />
          </S.SearchWrapper>
          <Atom.Divider />
          <S.IconWrapper>
            <ScanSearch size={20} />
          </S.IconWrapper>
          <S.IconWrapper>
            <div ref={messageRef}>
              <Mail size={20} onClick={handleMessageClick} />
              <MessageBox isOpen={isMessageOpen} />
            </div>
          </S.IconWrapper>
          <S.IconWrapper>
            <div ref={notificationRef}>
              <Bell size={20} onClick={handleNotificationClick} />
              <NotificationBox isOpen={isNotificationOpen} />
            </div>
          </S.IconWrapper>
          <Atom.Divider />
          {renderProfileSection()}
        </S.ContentWrapper>
      </S.Container>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseModal}
        onLogin={handleLocalLogin}
        isLoading={isLoading}
      />
    </>
  );
};

export default Navigator;