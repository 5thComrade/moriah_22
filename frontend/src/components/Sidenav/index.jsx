import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleHamburgerButton } from "../../store/app/actions";

const Sidenav = () => {
  const dispatch = useDispatch();

  function closeSideBarAfterNavigation() {
    dispatch(toggleHamburgerButton());
  }

  return (
    <div
      className="absolute right-0 top-0 z-20 w-3/4 px-4 py-24 h-full bg-neutral-900 flex flex-col space-y-9 items-center"
      onClick={closeSideBarAfterNavigation}
    >
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
