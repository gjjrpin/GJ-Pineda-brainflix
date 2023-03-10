import { Link } from "react-router-dom";
import "./HeaderPage.scss";
import logo from "../assets/Logo/BrainFlix-logo.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";

function HeaderPage() {
  return (
    <header className="header">
      <Link className="header__container" to="/">
        <img className="header__logo" src={logo} alt={logo} />
      </Link>
      <form className="header__form" action="">
        <div className="header__form-container">
          <span className="header__icon header__icon--search"></span>
          <input className="header__input" type="text" placeholder="Search" />
          <img className="header__avatar" src={avatar} alt={avatar} />
        </div>
        <div className="header__button-container">
          <span className="header__icon header__icon--upload"></span>
          <Link to="/UploadPage">
            <button className="header__button">Upload</button>
          </Link>
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

export default HeaderPage;
