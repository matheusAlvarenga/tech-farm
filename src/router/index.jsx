import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<h1>Erro</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
