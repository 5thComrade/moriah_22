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

        <div className="hidden space-x-16 3xl:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-xl border-b-4" : "text-xl"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-xl border-b-4" : "text-xl"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-xl border-b-4" : "text-xl"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-xl border-b-4" : "text-xl"
            }
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
