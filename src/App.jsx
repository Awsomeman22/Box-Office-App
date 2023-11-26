import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import MainLayout from './Components/MainLayout';
import ShowPage from './Pages/ShowPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Starred" element={<Starred />} />
            </Route>
            <Route path="/shows/:showId" element={<ShowPage />} />

            <Route path="*" element={<div>Not Found</div>} />

            {/* <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
          <Route element={<PageLayout />}>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tos" element={<Tos />} />
          </Route>
          <Route path="contact-us" element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
