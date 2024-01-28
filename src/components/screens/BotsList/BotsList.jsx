import "./BotsList.scss";

function BotsList() {
  return (
    <>
      <div className="user-bots">
        <p className="bots-list__title">Ваши боты:</p>
      </div>
      <div className="available-bots">
        <p className="bots-list__title">Доступные боты к аренде:</p>
      </div>
    </>
  );
}

export default BotsList;
