import "./Header.scss";
import Logo from "../../../assets/svg/logo.svg";
import SimpleModal from "../../SimpleModal/SimpleModal";
import ReplenishModal from "../../../ReplenishModal/ReplenishModal";
import { useState, useEffect } from "react";
import "../../css/modal.scss";

function Header({ menuActive }) {
  const [connectTgModal, setConnectTgModal] = useState(false);
  const [replenishModal, setReplenishModal] = useState(false);
  const [apiData, setApiData] = useState();

  useEffect(() => {
    setApiData(JSON.parse(sessionStorage.getItem("apiData")));
  }, [sessionStorage.getItem("apiData")]);
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

      <ReplenishModal
        isOpen={replenishModal}
        setReplenishModal={setReplenishModal}
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
      </ReplenishModal>

      <header className={`header ${menuActive ? "menuActive" : ""}`}>
        <div className="header__inner">
          <div className="logo__contain">
            <img src={Logo} alt="RoboRent" />
          </div>
          <div className="balance__contain">
            <p onClick={() => setReplenishModal(true)}>
              Баланс: <span>1000</span>Р<a href="#">Пополнить</a>
            </p>
            <p onClick={() => setConnectTgModal(true)}>
              Баланс ботов: <span>1000</span>Р<a href="#">Вывести</a>
            </p>
          </div>

          <div className="user-info__contain">
            <div className="user-info__inner">
              <div className="user-info__avatar">
                <img src="" alt="" />
              </div>
              <div className="user-info__links">
                <p className="user-info__links-name">@{apiData.login}</p>
                <a
                  href="https://t.me/ввввввввв?start=test_test2"
                  className="user-info__links-telegram"
                >
                  Привязать Telegram
                </a>
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
