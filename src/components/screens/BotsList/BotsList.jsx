import "./BotsList.scss";
import AvailableBots from "./AvailableBots/AvailableBots";
import { useState, useEffect } from "react";

function BotsList() {
  // const [availableBots, setAvailable] = useState([]);

  useEffect(() => {
    async function getAvailableBots() {
      const response = await fetch("");
      const result = await response.json();
      setAvailable(result);
    }

    // getAvailableBots();
  }, []);

  return (
    <>
      <div className="user-bots">
        <p className="bots-list__title">Ваши боты:</p>
      </div>
      <AvailableBots />
    </>
  );
}

export default BotsList;
