import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Register from "./pages/Register";
import Contribution from "./pages/Contribution";
import Error from "./pages/Error";

const appRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/gallery",
    component: <Gallery />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "/contribute",
    component: <Contribution />,
  },
  {
    path: "*",
    component: <Error />,
  },
];

export default appRoutes;
