import { theme } from './theme';

type Theme = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      primary: string;
      primaryHover: string;
      google: string;
      apple: string;
      kakao: string;
      naver: string;
      error: string;
      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      dangerLight: string;
      dangerDark: string;
      text: {
        primary: string;
        secondary: string;
        white: string;
      };
      border: string;
      background: {
        modal: string;
        overlay: string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
