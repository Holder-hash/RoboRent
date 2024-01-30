import "../BotsList/BotsList.scss";
import "./UserBotSinglePage.scss";

function UserBotSinglePage() {
  return (
    <>
      <div className="bots-contain">
        <p className="bots-list__title">Настройки бота:</p>
        <div className="bot-settings">
          <div className="bots-settings__header"></div>
          <div className="bots-settings__inputs"></div>
          <div className="bots-settings__footer"></div>
        </div>
      </div>
      <div className="bots-contain"></div>
    </>
  );
}

export default UserBotSinglePage;
