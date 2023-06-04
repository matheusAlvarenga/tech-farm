import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { HungryPage } from '../pages/hungry';

export function AppRouter() {
  return (
    <BrowserRouter basename="/tech-farm">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/fome" exact element={<HungryPage />} />
        <Route path="*" element={<h1>Erro</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
