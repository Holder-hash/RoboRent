import "./Header.scss";
import Logo from "../../assets/svg/logo.svg";

function Header() {
  return (
    <>
      <header>
        <div className="logo__contain">
          <img src={Logo} alt="RoboRent" />
        </div>
        <div className="balance__contain">
          <p>
            Баланс: <span>1000</span>Р<a href="#">Пополнить</a>
          </p>
          <p>
            Баланс ботов: <span>1000</span>Р<a href="#">Вывести</a>
          </p>
        </div>
        <div className="user-info__contain">
          <div className="user-info__inner">
            <div className="user-info__avatar">
              <img src="" alt="" />
            </div>
            <div className="user-info__links">
              <p className="user-info__links-name">@Diblaodjsss</p>
              <p className="user-info__links-telegram">Привязать Telegram</p>
              <p className="user-info__links-subscription">
                Подписка: <span>отсутствует</span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
