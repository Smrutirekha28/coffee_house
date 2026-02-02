import "./App.css";
import { useLocation } from "react-router";
import NavBar from "./components/common/NavBar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register", "/dashboard"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <NavBar />}
      <AllRoutes />
    </>
  );
}

export default App;
