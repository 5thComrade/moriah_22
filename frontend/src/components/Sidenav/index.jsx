import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="absolute right-0 w-3/4 p-4 h-3/4 bg-neutral-900 flex flex-col space-y-9 items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-4xl border-b-4" : "text-4xl"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-4xl border-b-4" : "text-4xl"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? "text-4xl border-b-4" : "text-4xl"
        }
      >
        Gallery
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "text-4xl border-b-4" : "text-4xl"
        }
      >
        Register
      </NavLink>
    </div>
  );
};

export default Sidenav;
