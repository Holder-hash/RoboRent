import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import BackgroundElements from "./BackgroundElements/BackgroundElements";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  if (location.pathname != "/RoboRent/bots-list") {
    document.querySelector("body").style.background = "rgb(21, 35, 51);";
  }
  return (
    <>
      {location.pathname == "/RoboRent/bots-list" && (
        <>
          <BackgroundElements />
          <Header />
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
