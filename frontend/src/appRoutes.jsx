import Home from "./pages/Home";
import Venue from "./pages/Venue";
import Register from "./pages/Register";
import Error from "./pages/Error";

const appRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/venue",
    component: <Venue />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "*",
    component: <Error />,
  },
];

export default appRoutes;
