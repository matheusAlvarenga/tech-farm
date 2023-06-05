import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { HungryPage } from '../pages/hungry';
import { InsecurityPage } from '../pages/insecurity';
import { FarmingPage } from '../pages/farming';
import { OurSolutionPage } from '../pages/our-solution';

export function AppRouter() {
  return (
    <BrowserRouter basename="/tech-farm">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/fome" exact element={<HungryPage />} />
        <Route path="/inseguranca" exact element={<InsecurityPage />} />
        <Route path="/agricultura" exact element={<FarmingPage />} />
        <Route path="/nossa-solucao" exact element={<OurSolutionPage />} />
        <Route path="*" element={<h1>Erro</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
