import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { HomePage } from '@/atomic/pages/home';
import { LoungePage } from '@/atomic/pages/lounge';
import { ProfilePage } from '@/atomic/pages/profile';
import { SettingPage } from '@/atomic/pages/setting';
import { Navigator } from '@/atomic/organisms/@navigator/@header';

import { DefaultLayout } from './atomic/template/@layout/@default';
import { theme } from './core/common/theme/theme';
import { Reset } from 'styled-reset';
import { RegistrationPage } from './atomic/pages/registration';
import { GlobalStyle } from './core/common/font/global.font';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Reset />
          <GlobalStyle />
          <Navigator />
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="settings" element={<SettingPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="lounge" element={<LoungePage />} />
              <Route path="/registration" element={<RegistrationPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
