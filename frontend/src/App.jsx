import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import appRoutes from "./appRoutes";
import NavBar from "./components/Navbar";
import Sidenav from "./components/Sidenav";

function App() {
  const showSideBar = useSelector((state) => state.appReducer.openSideBar);

  return (
    <div className="overflow-hidden bg-neutral-900 text-neutral-50 min-h-screen font-sans">
      <Router>
        <NavBar />

        {showSideBar && <Sidenav />}

        <Routes>
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
