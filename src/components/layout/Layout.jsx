import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";

function Layout() {
  return (
    <>
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
