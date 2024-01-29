import availableBots from "../../../../data/availableBots.json";
import BotsListBtn from "../../../ui/BotListBtn/BotsListBtn";
import "./AvailableBots.scss";

import { useState, useEffect } from "react";

function AvailableBots() {
  // const [availableBots, setAvailableBots] = useState([]);

  useEffect(() => {
    async function getAvailableBots() {
      const response = await fetch("");
      const result = await response.json();
      setAvailableBots(result);
    }

    // getAvailableBots();
  }, []);

  return availableBots.map((bot) => (
    <li key={bot.id}>
      <div className="bots__item-info">
        <img src={bot.img} />
        <div>
          <p className="bots__item-name">{bot.name}</p>
          <p className="bots__item-discraption">О боте: {bot.discraption}</p>
          <p className="bots__item-discraption">
            Особенности: {bot.peculiarities}
          </p>
        </div>
      </div>
      <div className="bots__item-buttons">
        <BotsListBtn>Протестить</BotsListBtn>
        <BotsListBtn>Хочу себе</BotsListBtn>
      </div>
    </li>
  ));
}

export default AvailableBots;
