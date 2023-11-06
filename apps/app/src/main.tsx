import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '_modules/auth/hooks/useContext';
import Auth from '_modules/auth/views/login';
import ErrorBoundary from '_modules/error-boundary';

import App from './App';
import { theme, GlobalStyle } from './style';

const queryClient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;

// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ReactQueryDevtools initialIsOpen={false} />
        <ErrorBoundary>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={<App />} />
                <Route path="/login" element={<Auth />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const root = createRoot(container);
root.render(<Main />);
