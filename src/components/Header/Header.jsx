import "./Header.scss";
import Logo from "../../assets/svg/logo.svg";

function Header() {
  return (
    <>
      <header>
        <div className="logo__contain">
          <img src={Logo} alt="" />
        </div>
        <div className="balance__contain"></div>
        <div className="user-info__contain"></div>
      </header>
    </>
  );
}

export default Header;
