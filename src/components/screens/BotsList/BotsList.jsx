import "./BotsList.scss";
import AvailableBots from "./botLists/AvailableBots";
import UserBots from "./botLists/UserBots";
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
        <ul>
          <UserBots />
        </ul>
      </div>

      <div className="available-bots">
        <p className="bots-list__title">Доступные боты к аренде:</p>

        <ul>
          <AvailableBots />
        </ul>
      </div>
    </>
  );
}

export default BotsList;
