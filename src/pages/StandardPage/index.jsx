import { Outlet } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";


const StandardPage = () => {
  return (
    <div >
      <Nav />
      <div className="w-screen flex justify-center h-[calc(100vh-76px)] items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default StandardPage;
