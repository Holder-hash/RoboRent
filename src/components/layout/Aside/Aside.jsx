import "./Aside.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

function Aside() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="aside">
      <div className={`menu ${showMenu ? "menu_show" : ""}`}>
        <div className="menu__title" onClick={() => setShowMenu(!showMenu)}>
          <p>Прочее:</p>
          <IoIosArrowForward
            className={`menu__arrow ${showMenu ? "menu__arrow_active" : ""}`}
          />
        </div>

        <nav>
          <ul>
            <li className="nav__item">
              <a href="">Настройки профиля</a>
            </li>
            <li className="nav__item">
              <a href="">Настроить подписку</a>
            </li>
            <li className="nav__item">
              <a href="">Telegram канал</a>
            </li>
            <li className="nav__item">
              <a href="">Тех. Поддержка</a>
            </li>
            <li className="nav__item">
              <a href="">Все документы и контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Aside;
