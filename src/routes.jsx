import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import StandardPage from "./pages/StandardPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<LoginForm />} />
          <Route path="outra-pagina" element={<p>Outra página</p>} />
        </Route>
        <Route path="*" element={<p>Not Found 404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
