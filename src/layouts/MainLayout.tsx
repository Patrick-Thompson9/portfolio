import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="dark:text-white dark:bg-slate-700 h-full transition duration-1000 font-poppins">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
