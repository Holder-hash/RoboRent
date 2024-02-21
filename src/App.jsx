import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import BotsList from "./components/screens/BotsList/BotsList.jsx";
import LandingPage from "./components/screens/LandingPage/LandingPage.jsx";
import LoginPage from "./components/screens/LoginPage/LoginPage.jsx";
import axios from "axios";

function App() {
  axios
    .get(
      "https://roborent.online/api/v1.0/login.php?login=123&pass=eeee&token=123123"
    )
    .then((response) => {
      sessionStorage.setItem("apiData", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error("Ошибка при получении данных из API:", error);
    });

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
