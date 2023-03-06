import "./Form.scss";
import avatar from "../assets/Images/Mohan-muruge.jpg";

function Form() {
  return (
    <div className="form">
      <div className="form__main-container">
        <img className="form__avatar" src={avatar} alt="avatar"></img>
        <form className="form__container">
          <p className="form__title">Join The Conversation</p>
          <div className="form__sub-container">
            <textarea
              className="form__input"
              placeholder="Add a new comment"
              rows="5"
            ></textarea>

            <div>
              <span className="form__button--icon"></span>
              <button className="form__button">Comment</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
