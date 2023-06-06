import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Auth from '_modules/auth/components';
import ErrorBoundary from '_modules/error-boundary';

import App from './App';
import { theme, GlobalStyle } from './style';

const queryClient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  </QueryClientProvider>
);
