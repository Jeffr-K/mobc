import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LoungePage } from '@/pages/community/lounge';
import { ProfilePage } from '@/pages/user/profile';
import { SettingPage } from '@/pages/user/setting';
import { Navigator } from '@/shared/atomic/organisms/@navigator/@header';

import { DefaultLayout } from './shared/atomic/template/@layout/@default';
import { theme } from './shared/common/theme/theme';
import { Reset } from 'styled-reset';

import { GlobalStyle } from './shared/common/font/global.font';
import { HomePage } from './pages/home/home';
import { RegistrationPage } from './pages/home/registration';
import { CarrersPage } from './pages/carrers/carrer';
import { CarrerDetailPage } from './pages/carrers/carrer-details';
import { Organization } from './pages/organization/organization';
import { OrganizationRegistrationPage } from './pages/organization/organization-registration';
import { TalentPoolPage } from './pages/organization/talent-pool';
import { CavePage } from './pages/cave/cave';
import { CaveDetailPage } from './pages/cave/cave-detail';


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
              <Route path="/cave" element={<CavePage />} />
              <Route path="/cave/:id" element={<CaveDetailPage />} />
              <Route path="/carrers" element={<CarrersPage />} />
              <Route path="/carrers/:id" element={<CarrerDetailPage />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/organization-registration" element={<OrganizationRegistrationPage />} />
              <Route path="/talent-pool" element={<TalentPoolPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
