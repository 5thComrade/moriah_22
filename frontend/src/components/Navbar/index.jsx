import { NavLink } from "react-router-dom";
import Hamburger from "../Hamburger";
import logo from "../../assets/icons/logo.svg";

const NavBar = () => {
  return (
    <div className="container relative z-30 mx-auto p-4">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo of Moriah Meet"
            className="w-16 h-16 md:w-20 md:h-20 3xl:w-24 3xl:h-24"
          />
        </NavLink>

        <Hamburger />
      </div>
    </div>
  );
};

export default NavBar;
