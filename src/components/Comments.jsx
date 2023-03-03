import "./Comments.scss";
import Comment from "./Comment";

// This is destructuring
function Comments({ commentsData }) {
  return (
    <div className="comment">
      <p className="comment__counter">{commentsData.length} Comments</p>
      <div>
        <p className="comment__title">Join The Conversation</p>
        <img className="comment__avatar"></img>
        <form className="comment__form">
          <textarea
            className="comment__input"
            placeholder="Add a new comment"
          ></textarea>
          <button className="comment__button">Comment</button>
        </form>
      </div>
      <div>
        {commentsData.map((comment) => (
          <Comment key={comment.id} commentData={comment} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
