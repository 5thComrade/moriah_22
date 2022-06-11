import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import appRoutes from "./appRoutes";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />

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
