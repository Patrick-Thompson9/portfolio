import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="container navbar h-20 flex justify-center gap-10 items-center">
        <NavLink to="/" className="m-4">
          Home
        </NavLink>
        <NavLink to="/projects" className="m-4">
          Projects
        </NavLink>
        <NavLink to="/about" className="m-4">
          About
        </NavLink>
      </div>
      <div className="navSpacer waves"></div>
    </nav>
  );
}

export default NavBar;
