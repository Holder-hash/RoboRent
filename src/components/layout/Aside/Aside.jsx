import "./Aside.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";

function Aside() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 750 && setisMobile(true);
  }, []);

  const headerElemnt = document.querySelector("header");

  if (window.innerWidth <= 750 && headerElemnt) {
    const asideElement = document.querySelector(".aside");
    const balanceElement = document.querySelector(".balance__contain");
    const logoElement = document.querySelector(".logo__contain");
    const profileElement = document.querySelector(".user-info__contain");
    headerElemnt && headerElemnt.appendChild(asideElement);
    asideElement.appendChild(logoElement);
  }

  return (
    <div
      className="aside"
      style={{
        display: isMobile ? "flex" : "none",
      }}
    >
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
