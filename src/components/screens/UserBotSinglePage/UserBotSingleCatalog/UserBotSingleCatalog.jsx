import "../../BotsList/BotsList.scss";
import "../UserBotSinglePage.scss";
import BotsListBtn from "../../../ui/BotListBtn/BotsListBtn";
import BotListInput from "../../../ui/BotListInput/BotListInput";
import { useState, useEffect } from "react";

function UserBotSingleCatalog({ data }) {
  const [userBotCatalog, setuserBotCatalog] = useState([]);

  useEffect(() => {
    setuserBotCatalog(data.map((bot) => bot.catalog)[0]);
  }, [data]);

  const onChangeBotPrice = (event) => {
    console.log(event.target.value);
  };

  return (
    <ul>
      {userBotCatalog.map((bot, index) => (
        <li key={index}>
          <form
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="bots__item-info">
              <img src={bot.img} />
              <div>
                <p className="bots__item-name">{bot.name}</p>
                <p
                  className="bots__item-discraption"
                  style={{ maxWidth: "300px" }}
                >
                  {bot.discraption}
                </p>
              </div>
            </div>
            <div className="bots__item-buttons">
              <BotListInput
                style={{
                  maxWidth: "107px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
                value={"1000р"}
                onChange={onChangeBotPrice}
              />
              <BotsListBtn>Удалить</BotsListBtn>
            </div>
          </form>
        </li>
      ))}
    </ul>
  );
}

export default UserBotSingleCatalog;
