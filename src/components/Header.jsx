import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../assets/Logo/BrainFlix-logo.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt={logo} />
      </NavLink>
      <form className="header__form" action="">
        <div className="header__form-container">
          <span className="header__icon header__icon--search"></span>
          <input className="header__input" type="text" placeholder="Search" />
          <img className="header__avatar" src={avatar} alt={avatar} />
        </div>
        <div className="header__button-container">
          <span className="header__icon header__icon--upload"></span>
          <NavLink to="/UploadPage">
            <button className="header__button">Upload</button>
          </NavLink>
        </div>
        <img
          className="header__avatar header__avatar--right"
          src={avatar}
          alt={avatar}
        />
      </form>
    </header>
  );
}

export default Header;
