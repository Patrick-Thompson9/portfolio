import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export const buttonClasses = `m-4 transition duration-700 font-bold py-2 px-4 rounded-full bg-sky-400 hover:bg-blue-600 text-white shadow-md
  dark:bg-emerald-200 dark:hover:bg-emerald-500 dark:text-slate-700 hover:cursor-pointer tracking-wide`;

function MainLayout() {
  return (
    <div className="dark:text-white dark:bg-slate-700 transition duration-1000 font-poppins min-h-full">
      <NavBar buttonClasses={buttonClasses} />
      <Outlet />
    </div>
  );
}

export default MainLayout;
