import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import Auth from '_modules/auth/components';
import { theme, GlobalStyle } from './style';

const queryClient = new QueryClient();

const MainApp: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<MainApp />);
