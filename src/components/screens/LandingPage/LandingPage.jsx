import "./LandingPage.scss";
import LandingBgElements from "./LandingBgElements";
import StarsContain from "../../ui/landing/StarsContain/StarsContain";

function LandingPage() {
  return (
    <>
      <section className="overview">
        <LandingBgElements />
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
      </section>
      <section className="advantages">
        <StarsContain title={"Преимущества"} />
      </section>
    </>
  );
}

export default LandingPage;
