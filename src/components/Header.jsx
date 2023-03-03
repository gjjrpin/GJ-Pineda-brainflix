import "./Header.scss";
import logo from "../assets/Logo/BrainFlix-logo.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <form className="header__form" action="">
        <div className="header__form-container">
          <input type="text" placeholder="Search" />
          <img className="header__avatar" src={avatar} alt="" />
        </div>
        <button className="header__button">Upload</button>
      </form>
    </header>
  );
}

export default Header;
