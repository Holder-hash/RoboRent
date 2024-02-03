import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import BotsList from "./components/screens/BotsList/BotsList.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/RoboRent" element={<Layout />}>
          <Route index element={<BotsList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
