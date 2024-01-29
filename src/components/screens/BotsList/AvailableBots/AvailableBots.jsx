import availableBots from "../../../../data/availableBots.json";
import BotsListBtn from "../../../ui/BotListBtn/BotsListBtn";

import { useState, useEffect } from "react";

function AvailableBots() {
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
    <div className="available-bots">
      <p className="bots-list__title">Доступные боты к аренде:</p>
      <ul>
        {availableBots.map((bot) => (
          <li key={bot.id}>
            <div className="available-bots__item-info">
              <img src={bot.img} />
              <div>
                <p className="available-bots__item-name">{bot.name}</p>
                <p className="available-bots__item-discraption">
                  О боте: {bot.discraption}
                </p>
                <p className="available-bots__item-discraption">
                  Особенности: {bot.peculiarities}
                </p>
              </div>
            </div>
            <div className="available-bots__item-buttons">
              <BotsListBtn>Протестить</BotsListBtn>
              <BotsListBtn>Хочу себе</BotsListBtn>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableBots;
