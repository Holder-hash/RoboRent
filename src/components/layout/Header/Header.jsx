import "./Header.scss";
import Logo from "../../../assets/svg/logo.svg";
import SimpleModal from "../../SimpleModal/SimpleModal";
import { useState } from "react";
import "../../css/modal.scss";

function Header({ menuActive }) {
  const [connectTgModal, setConnectTgModal] = useState(false);

  return (
    <>
      <SimpleModal
        isOpen={connectTgModal}
        setConnectTgModal={setConnectTgModal}
        className={"modal"}
      >
        <form action="" className="modal__form">
          <div className="modal__blocks-wrapper">
            <div className="modal__blocks-item"></div>
            <div className="modal__blocks-item"></div>
            <div className="modal__blocks-item"></div>
          </div>
          <input type="text" placeholder="какой то текст" />
          <input type="text" placeholder="какой то текст" />
          <input type="submit" />
        </form>
      </SimpleModal>

      <header className={`header ${menuActive ? "menuActive" : ""}`}>
        <div className="header__inner">
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
                <p
                  href=""
                  className="user-info__links-telegram"
                  onClick={() => setConnectTgModal(true)}
                >
                  Привязать Telegram
                </p>
                <p className="user-info__links-subscription">
                  Подписка: <span>отсутствует</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
