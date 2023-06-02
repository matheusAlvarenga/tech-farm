import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<h1>Teste</h1>}></Route>
      <Route path="*" element={<h1>Erro</h1>}></Route>
    </Routes>
  </BrowserRouter>
)
