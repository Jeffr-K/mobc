import { useNavigate } from "react-router-dom";
import * as Atom from '../../../atoms';
import { 
  Grip, 
  Shell, 
  Search, 
  ScanSearch, 
  Mail, 
  Bell, 
  Settings,
  User,
  Coffee
 } from 'lucide-react';
import * as S from './styles';
import { HotNews } from "@/atomic/molecules/@hotNews";

export const Navigator = (): React.ReactElement => {
  const navigate = useNavigate();
 
  const handleLogoClick = () => {
    navigate('/');
  }
 
  return (
    <S.Container>
      <S.Logo onClick={handleLogoClick}>PERSONA</S.Logo>
      
      <Atom.Divider />
      
      <S.IconWrapper>
        <Grip size={20} />
      </S.IconWrapper>
      
      <S.IconWrapper>
        <Shell size={20} />
      </S.IconWrapper>

      <S.IconWrapper>
        <Coffee size={20} />
      </S.IconWrapper>
 
      <S.HotNewsWrapper>
        <HotNews />
      </S.HotNewsWrapper>
 
      <S.SearchWrapper>
        <S.SearchInput placeholder="Search..." />
        <Search size={20} />
      </S.SearchWrapper>
 
      <Atom.Divider />
 
      <S.IconWrapper>
        <ScanSearch size={20} />
      </S.IconWrapper>
 
      <S.IconWrapper>
        <Mail size={20} />
      </S.IconWrapper>
 
      <S.IconWrapper>
        <Bell size={20} />
      </S.IconWrapper>

      <Atom.Divider />

      <S.ProfileWrapper>
        <S.ProfileImage>
          <User size={24} /> {/* 실제 이미지로 교체 필요 */}
        </S.ProfileImage>
        <S.ProfileName>닉네임</S.ProfileName>
      </S.ProfileWrapper>
 
      <Atom.Divider />
 
      <S.IconWrapper>
        <Settings size={20} />
      </S.IconWrapper>
    </S.Container>
  );
 };















 

// export const Navigator = (): React.ReactElement => {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [notificationCount] = useState(3);

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   const handleSettings = () => {
//     navigate('/settings');
//   };

//   return (
//     <S.Nav>
//       <S.MobileMenuButton>
//         <IconButton icon={<Menu size={24} />} onClick={() => setIsMobileOpen(!isMobileOpen)} />
//       </S.MobileMenuButton>

//       <S.Logo>LOGO</S.Logo>

//       <S.NavList $isMobileOpen={isMobileOpen}>
//         {menus.map(menu => (
//           <S.NavItem
//             key={menu.path}
//             $isActive={pathname === menu.path}
//             onClick={() => {
//               navigate(menu.path);
//               setIsMobileOpen(false);
//             }}
//           >
//             {menu.label}
//           </S.NavItem>
//         ))}
//       </S.NavList>

//       <S.RightSection>
//         <SearchInput onChange={value => console.log('Search:', value)} />
//         <NotificationBell count={notificationCount} onClick={() => navigate('/notifications')} />
//         <ProfileMenu
//           user={{
//             name: 'John Doe',
//             image: 'https://via.placeholder.com/32',
//           }}
//           onLogout={handleLogout}
//           onSettings={handleSettings}
//         />
//       </S.RightSection>
//     </S.Nav>
//   );
// };
