import { Outlet } from "react-router-dom";
import MenuBtn from "../ui/MenuBtn/MenuBtn";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import BackgroundElements from "./BackgroundElements/BackgroundElements";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Layout() {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  if (location.pathname == "/RoboRent/" || location.pathname == "/RoboRent") {
    document.querySelector("body").classList.add("body_dark");
  } else {
    document.querySelector("body").classList.remove("body_dark");
  }

  return (
    <>
      {location.pathname == "/RoboRent/bots-list/" && (
        <>
          <BackgroundElements />
          <MenuBtn onClick={() => setMenuActive(!menuActive)} />
          <Header menuActive={menuActive} />
        </>
      )}
      {location.pathname == "/RoboRent/auth/" && (
        <>
          <BackgroundElements />
        </>
      )}

      <div className={location.pathname == "/RoboRent/bots-list/" && "wrapper"}>
        <main>
          <Outlet />
        </main>

        {location.pathname == "/RoboRent/bots-list/" && (
          <>
            <Aside />
          </>
        )}
      </div>
    </>
  );
}

export default Layout;
