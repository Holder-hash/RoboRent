import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import BackgroundElements from "./BackgroundElements/BackgroundElements";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  if (location.pathname == "/RoboRent/" || location.pathname == "/RoboRent") {
    document.querySelector("body").classList.add("body_dark");
  } else {
    document.querySelector("body").classList.remove("body_dark");
  }
  return (
    <>
      {location.pathname == "/RoboRent/bots-list" && (
        <>
          <BackgroundElements />
          <Header />
        </>
      )}
      {location.pathname == "/RoboRent/auth" && (
        <>
          <BackgroundElements />
        </>
      )}

      <div className={location.pathname == "/RoboRent/bots-list" && "wrapper"}>
        <main>
          <Outlet />
        </main>

        {location.pathname == "/RoboRent/bots-list" && (
          <>
            <Aside />
          </>
        )}
      </div>
    </>
  );
}

export default Layout;
