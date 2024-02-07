import "./Aside.scss";
import { IoIosArrowForward } from "react-icons/io";

function Aside() {
  function menuClickHandler(event) {
    event.target.classList.toggle("menu__arrow_active");
  }

  return (
    <div className="aside">
      <div className="menu">
        <div className="menu__title">
          <p>Прочее:</p>
          <IoIosArrowForward
            className="menu__arrow"
            onClick={() => menuClickHandler(event)}
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
