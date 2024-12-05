import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { HomePage } from '@/atomic/pages/home';
import { LoungePage } from '@/atomic/pages/lounge';
import { ProfilePage } from '@/atomic/pages/profile';
import { SettingPage } from '@/atomic/pages/setting';

import { DefaultLayout } from './atomic/templates/@layout/@default';
import { theme } from './core/common/theme/theme';
import { Reset } from 'styled-reset';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Reset />
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/settings" element={<SettingPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/lounge" element={<LoungePage />} />
            </Routes>
          </DefaultLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
