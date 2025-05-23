import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import * as Atom from "../../../atoms";
import { Grip, Shell, Search, ScanSearch, Mail, Bell, Settings, Coffee } from "lucide-react";
import * as S from "./styles";
import { HotNews } from "@/shared/atomic/molecules/@hotNews";
import { useAtom, useSetAtom } from "jotai";
import { NotificationBox } from "@/shared/atomic/organisms/@box/@notification";
import { MessageBox } from "@/shared/atomic/organisms/@box/@message";
import { SearchBox } from "@/shared/atomic/organisms/@box/@search";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { DropdownMenu } from "@/shared/atomic/molecules/@menu/@dropdown";
import { useQueryUserHook } from "@/features/user/core/hooks/user.hooks";
import { userAtom } from "@/features/user/infrastructure/atoms/user.atoms";
import { User } from "@/features/user/core/model/user.model";
import { loginModalOpenAtom } from "@/entities/auth/hook/useLoginModalHook";

export const Navigator = (): React.ReactElement => {
  const navigate = useNavigate();

  const setIsLoginModalOpen = useSetAtom(loginModalOpenAtom);
  const [profileDropdownMenu, setprofileDropdownMenu] = useState(false);

  const [user, setUser] = useAtom<User | null>(userAtom);
  const { refetch } = useQueryUserHook();

  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTokenExpiration = async () => {
      const token = localStorage.getItem("accessToken");
      const user = localStorage.getItem("user");

      if (!token || !user) {
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        return;
      }

      try {
        const response = await refetch();
        if (!response || response.error) {
          setUser(null);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Token validation error:", error);
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
      }
    };

    checkTokenExpiration();
  }, [refetch, setUser]);

  const renderProfileSection = () => {
    if (!user?.uuid) {
      return <S.LoginButton onClick={handleLoginClick}>로그인하기</S.LoginButton>;
    }

    return (
      <>
        <S.ProfileContainer>
          <S.ProfileWrapper onClick={() => setprofileDropdownMenu(!profileDropdownMenu)}>{user?.nickname}</S.ProfileWrapper>
          {profileDropdownMenu && (
            <S.DropdownContainer>
              <DropdownMenu onClose={() => setprofileDropdownMenu(false)} />
            </S.DropdownContainer>
          )}
        </S.ProfileContainer>

        <Atom.Divider />

        <S.IconWrapper onClick={handleSettingsClick}>
          <Settings size={20} />
        </S.IconWrapper>
      </>
    );
  };

  useClickOutside(searchRef, () => {
    if (isSearchOpen) setIsSearchOpen(false);
  });

  useClickOutside(messageRef, () => {
    if (isMessageOpen) setIsMessageOpen(false);
  });

  useClickOutside(notificationRef, () => {
    if (isNotificationOpen) setIsNotificationOpen(false);
  });

  const handleLogoClick = () => navigate("/");
  const handleLoginClick = () => setIsLoginModalOpen(true);
  const handleSettingsClick = () => navigate("/settings");
  const handleLoungeClick = () => navigate("/lounge");
  const handleCaveClick = () => navigate("/cave");

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
          <S.SearchInput placeholder="Search..." onFocus={handleSearchFocus} />
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
  );
};
