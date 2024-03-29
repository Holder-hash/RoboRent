import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import BotsList from "./components/screens/BotsList/BotsList.jsx";
import LandingPage from "./components/screens/LandingPage/LandingPage.jsx";
import LoginPage from "./components/screens/LoginPage/LoginPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/RoboRent" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/RoboRent/auth" element={<LoginPage />} />
          <Route path="/RoboRent/bots-list" element={<BotsList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
