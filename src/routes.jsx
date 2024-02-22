import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import StandardPage from "./pages/StandardPage";
import Banner from "./pages/MainPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<LoginForm />} />
          <Route path="outra-pagina" element={<p>Outra página</p>} />
        </Route>
        <Route path="/" element={<StandardPage />}>
          <Route path="main-page" element={
          <div>
            <Banner 
            backgroundImage="./assets/banner.jpeg"
            title="Welcome to BookShelf"
            text="Your personal digital Library"
            buttonText="Learn More"
            buttonLink="/-learn-more"

          /></div>} />
        </Route>
        <Route path="*" element={<p>Not Found 404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
