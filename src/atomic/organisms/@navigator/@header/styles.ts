import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

export const NavList = styled.ul<{ isMobileOpen: boolean }>`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    display: ${props => (props.isMobileOpen ? 'flex' : 'none')};
    border-bottom: 1px solid ${props => props.theme.colors.gray200};
  }
`;

export const NavItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  color: ${props => (props.isActive ? props.theme.colors.primary : props.theme.colors.gray700)};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MobileMenuButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
