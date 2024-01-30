import "../BotsList/BotsList.scss";
import "./UserBotSinglePage.scss";
import BotSettingInput from "../../ui/BotSettingsInput/BotSettingInput";
import BotsListBtn from "../../ui/BotListBtn/BotsListBtn";
import userBots from "../../../data/userBots.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserBotSinglePage({ to }) {
  const { id } = useParams(to);
  const [userBotSingle, setUserBotSingle] = useState([]);

  useEffect(() => {
    setUserBotSingle(userBots.filter((bot) => bot.id == id));
  }, [id]);

  return (
    <>
      <div className="bots-contain">
        <p className="bots-list__title">Настройки бота:</p>
        <form className="bot-settings">
          {userBotSingle.map((bot) => (
            <div key={bot.id}>
              <div className="bots-settings__header">
                <div className="bots__item-info ">
                  <img src={bot.img} />
                  <div>
                    <p className="bots__item-name">
                      {bot.name}{" "}
                      <span className="bots__item-name_id">id: {bot.id}</span>
                    </p>
                    <p className="bots__item-status">
                      Статус:{" "}
                      <span
                        style={{
                          color: bot.status[0] ? "#0EA539" : "red",
                        }}
                      >
                        {bot.status[0]
                          ? `Действует до ${bot.status[1]}`
                          : `Просрочен`}
                      </span>
                    </p>
                  </div>
                </div>
                <BotsListBtn>Отключить бота</BotsListBtn>
              </div>
              <div className="bots-settings__inputs">
                <label htmlFor="token">Token вашего бота:</label>
                <BotSettingInput type="text" value={bot.token} />
                <label htmlFor="token">Текст приветствия:</label>
                <BotSettingInput type="text" />
              </div>
              <div className="bots-settings__footer">
                <div className="bots-settings__footer-additional">
                  <BotsListBtn>Пользователи</BotsListBtn>
                  <BotsListBtn>Пользователи</BotsListBtn>
                </div>
                <BotsListBtn>Сохранить</BotsListBtn>
              </div>
            </div>
          ))}
        </form>
      </div>
      <div className="bots-contain"></div>
    </>
  );
}

export default UserBotSinglePage;
