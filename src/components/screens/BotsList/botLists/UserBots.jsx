import userBots from "../../../../data/userBots.json";
import BotsListBtn from "../../../ui/BotListBtn/BotsListBtn";
import "./userBots.scss";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function UserBots() {
  const navigate = useNavigate();
  // const [availableBots, setUserBots] = useState([]);

  useEffect(() => {
    async function getUserBots() {
      const response = await fetch("");
      const result = await response.json();
      setUserBots(result);
    }

    // getAvailableBots();
  }, []);

  return userBots.map((bot) => (
    <li key={bot.id}>
      <div className="bots__item-info">
        <img src={bot.img} />
        <div>
          <p className="bots__item-name">{bot.name}</p>
          <p className="bots__item-status">
            Статус:{" "}
            <span
              style={{
                color: bot.status[0] ? "#0EA539" : "red",
              }}
            >
              {bot.status[0] ? `Действует до ${bot.status[1]}` : `Просрочен`}
            </span>
          </p>
        </div>
      </div>
      <div className="bots__item-buttons">
        <BotsListBtn onClick={() => navigate(`/RoboRent/${bot.id}`)}>
          Перейти в бота
        </BotsListBtn>
        <BotsListBtn onClick={() => navigate(`/RoboRent/${bot.id}`)}>
          Настроить
        </BotsListBtn>
      </div>
    </li>
  ));
}

export default UserBots;
