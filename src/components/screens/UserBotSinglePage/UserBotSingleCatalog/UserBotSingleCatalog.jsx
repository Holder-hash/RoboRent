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

  const onSubmitBotPrice = (event) => {
    event.preventDefault();
    const targetElement = event.target.querySelector("input");
    alert(
      `прайс ${
        event.target.querySelector(".bots__item-name").textContent
      } изменен на ${targetElement.value}`
    );
    event.target.submit();
  };

  return (
    <ul>
      {userBotCatalog.map((bot, index) => (
        <li key={index}>
          <form
            onSubmit={onSubmitBotPrice}
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
                type="number"
                onBlur={(e) => e.target.form.submit()}
                style={{
                  maxWidth: "107px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
                defaultValue={Number(bot.price)}
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
