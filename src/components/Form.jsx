import "./Form.scss";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import { useState } from "react";

function Form({ postNewComment }) {
  const [comment, setComment] = useState("");

  function handlePostNewComment(event) {
    event.preventDefault();
    postNewComment(comment);
    // this sets an empty comment.
    setComment("");
  }

  function handleCommentChange(event) {
    // console.log(event.target.value);
    setComment(event.target.value);
  }

  //-----------------------------------

  return (
    <div className="form">
      <div className="form__main-container">
        <img className="form__avatar" src={avatar} alt="avatar"></img>
        <form className="form__container" onSubmit={handlePostNewComment}>
          <p className="form__title">Join The Conversation</p>
          <div className="form__sub-container">
            <textarea
              className="form__input"
              placeholder="Add a new comment"
              rows="5"
              onChange={handleCommentChange}
              // setting the value to the state, which is comment.
              value={comment}
            ></textarea>

            <div>
              <span className="form__button--icon"></span>
              {/* "type="submit" is provided by HTML, submit is specific for forms even though it's a string. */}
              <button className="form__button" type="submit">
                Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
