import "./Comments.scss";
import Comment from "./Comment";

function Comments(props) {
  return (
    <div>
      {/* props.anything */}
      <p>{props.commentsData.length}Comments</p>
      <p>Join The Conversation</p>
      <div>
        <img></img>
        <form>
          <textarea></textarea>
          <button>Comment</button>
        </form>
      </div>

      {props.commentsData.map((comment) => (
        <Comment key={comment.id} commentData={comment} />
      ))}
    </div>
  );
}

export default Comments;
