import "./BotsList.scss";
import AvailableBots from "./botLists/AvailableBots";
import UserBots from "./botLists/UserBots";

function BotsList() {
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
