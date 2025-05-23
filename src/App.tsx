import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { LoungePage } from "@/pages/community/lounge";
import { ProfilePage } from "@/features/user/presentation/pages/profile/profile";
import { SettingPage } from "@/features/user/presentation/pages/setting";
import { Navigator } from "@/shared/atomic/organisms/@navigator/@header";

import { DefaultLayout } from "./shared/atomic/template/@layout/@default";
import { theme } from "./shared/common/theme/theme";
import { Reset } from "styled-reset";

import { GlobalStyle } from "./shared/common/font/global.font";
import { HomePage } from "./pages/home/home";
import { RegistrationPage } from "./pages/home/registration";
import { CarrersPage } from "./pages/carrers/carrer";
import { CarrerDetailPage } from "./pages/carrers/carrer-details";
import { Organization } from "./pages/organization/organization";
import { OrganizationRegistrationPage } from "./pages/organization/organization-registration";
import { TalentPoolPage } from "./pages/organization/talent-pool";
import { CavePage } from "./pages/cave/cave";
import { CaveDetailPage } from "./pages/cave/cave-detail";
import { LoginModal } from "@/shared/atomic/organisms/@modal/@login";
import { toast } from "react-toastify";

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        const errorMessage = query.meta?.errorMessage || (error instanceof Error ? error.message : "오류가 발생했습니다");

        console.error("Query error:", errorMessage);

        toast.error(errorMessage);
      },
    }),
    mutationCache: new MutationCache({
      onError: (error, _variables, _context, mutation) => {
        const errorMessage = mutation.meta?.errorMessage || (error instanceof Error ? error.message : "오류가 발생했습니다");

        console.error("Mutation error:", errorMessage);

        toast.error(errorMessage);
      },
      onSuccess: (_data, _variables, _context, mutation) => {
        if (mutation.meta?.successMessage) {
          toast.success(mutation.meta.successMessage);
        }
      },
    }),
  });
};

const queryClient = createQueryClient();

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
          <LoginModal />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
