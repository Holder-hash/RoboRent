import userBots from "../../../../data/userBots.json";
import BotsListBtn from "../../../ui/BotListBtn/BotsListBtn";
import "./userBots.scss";

import { useState, useEffect } from "react";

function UserBots() {
  const [apiDataBot, setApiDataBot] = useState([]);
  // const [availableBots, setUserBots] = useState([]);

  useEffect(() => {
    async function getUserBots() {
      const response = await fetch("");
      const result = await response.json();
      setUserBots(result);
    }

    // getAvailableBots();
  }, []);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("apiData"));
    setApiDataBot([data.bot_name_adi]);
  }, []);

  // return userBots.map((bot) => (
  //   <li key={bot.id}>
  //     <div className="bots__item-info">
  //       <img src={bot.img} />
  //       <div>
  //         <p className="bots__item-name">{bot.name}</p>
  //         <p className="bots__item-status">
  //           Статус:{" "}
  //           <span
  //             style={{
  //               color: bot.status[0] ? "#0EA539" : "red",
  //             }}
  //           >
  //             {bot.status[0] ? `Действует до ${bot.status[1]}` : `Просрочен`}
  //           </span>
  //         </p>
  //       </div>
  //     </div>
  //     <div className="bots__item-buttons">
  //       <BotsListBtn>Перейти в бота</BotsListBtn>
  //       <BotsListBtn>Настроить</BotsListBtn>
  //     </div>
  //   </li>
  // ));

  return (
    apiDataBot &&
    apiDataBot.map((bot, index) => (
      <li key={index}>
        <div className="bots__item-info">
          <img src={bot.img} />
          <div>
            <p className="bots__item-name">{bot}</p>
            <p className="bots__item-status">Статус: </p>
          </div>
        </div>
        <div className="bots__item-buttons">
          <BotsListBtn>Перейти в бота</BotsListBtn>
          <BotsListBtn>Настроить</BotsListBtn>
        </div>
      </li>
    ))
  );
}

export default UserBots;
