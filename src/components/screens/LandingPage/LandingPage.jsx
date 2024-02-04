import "./LandingPage.scss";
import LandingBgElements from "./LandingBgElements";
import StarsContain from "../../ui/landing/StarsContain/StarsContain";

function LandingPage() {
  return (
    <div className="landing-wrapper">
      <section className="overview">
        <LandingBgElements />
        <div className="overview__inner">
          <div className="overview__left">
            <p className="overview__left-title">
              Быстро
              <br />
              Качественно
              <br />
              Демократично
            </p>
            <p className="overview__left-description">
              Услуги аренды ботов, создания ботов.
            </p>
          </div>
          <div className="overview__right">
            <button className="overview__right-btn">Перейти</button>
          </div>
        </div>
      </section>

      <section className="advantages">
        <StarsContain title={"Преимущества"} />

        <div className="advantages__cards">
          <div className="advantages__cards-item_white">
            <p className="advantages__cards-item-title">
              Скорость 💨
              <br />
              создания
            </p>
            <p className="advantages__cards-item-descraption">
              Наш проект полностью
              <br />
              автоматизирован и прост
            </p>
          </div>

          <div className="advantages__cards-item_blue">
            <p className="advantages__cards-item-title">
              Есть 💭
              <br />
              отзывы
            </p>
            <p className="advantages__cards-item-descraption">
              Есть отзывы на разных
              <br />
              площадках.
            </p>
          </div>

          <div className="advantages__cards-item_white">
            <p className="advantages__cards-item-title">
              Очень
              <br />
              бюджетно
            </p>
            <p className="advantages__cards-item-descraption">
              Наши цены ниже чем у остальных,
              <br />а ассортимент больше
            </p>
          </div>
        </div>

        <div className="advantages__about">
          <p>
            <span>Наш проект</span> продвинет{" "}
            <span>
              ваши услуги
              <br />
            </span>
            и принесет <span>дополнительную</span> прибыль
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
