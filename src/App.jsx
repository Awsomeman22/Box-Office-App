import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import MainLayout from './Components/MainLayout';
import ShowPage from './Pages/ShowPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GolobalTheme } from './Pages/Theme';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GolobalTheme>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Starred" element={<Starred />} />
              </Route>
              <Route path="/shows/:showId" element={<ShowPage />} />

              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </BrowserRouter>
        </GolobalTheme>
      </QueryClientProvider>
    </div>
  );
}

export default App;
