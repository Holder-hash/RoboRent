import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import BackgroundElements from "./BackgroundElements/BackgroundElements";

function Layout() {
  return (
    <>
      <BackgroundElements />
      <Header />

      <div className="wrapper">
        <main>
          <Outlet />
        </main>

        <Aside />
      </div>
    </>
  );
}

export default Layout;
