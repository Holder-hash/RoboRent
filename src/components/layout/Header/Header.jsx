import "./Header.scss";
import Logo from "../../../assets/svg/logo.svg";
import SimpleModal from "../../SimpleModal/SimpleModal";
import { useState } from "react";

function Header({ menuActive }) {
  const [connectTgModal, setConnectTgModal] = useState(false);

  return (
    <>
      <SimpleModal
        isOpen={connectTgModal}
        setConnectTgModal={setConnectTgModal}
      >
        <h2>Simple title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          aliquam animi. Molestias quisquam rerum aperiam praesentium
          reprehenderit consequatur, nihil inventore beatae ducimus quia
          repellendus facilis recusandae maxime ipsa perferendis magnam sit
          dignissimos doloribus cupiditate assumenda at fugiat placeat repellat.
          Ratione, minus officia et sunt culpa nobis facere optio natus mollitia
          labore non iste nostrum earum repellat provident architecto qui porro
          deleniti eos dolorum. Aut aspernatur vero voluptate amet numquam nulla
          officiis! Deserunt eaque, autem cum ducimus necessitatibus dolores
          consequuntur voluptatem.
        </p>
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
