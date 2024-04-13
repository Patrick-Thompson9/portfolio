//import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="container navbar h-20 flex justify-center gap-10 items-center">
        <div className="m-4">Home</div>
        <div className="m-4">Projects</div>
        <div className="m-4">About</div>
      </div>
      <div className="navSpacer waves"></div>
    </nav>
  );
}

export default NavBar;
