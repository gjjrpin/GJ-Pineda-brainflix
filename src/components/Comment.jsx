import "./Comment.scss";

function Comment(props) {
  // props.commentData == an object of comment.

  return (
    <div>
      <img src="" alt="" />
      <p>{props.commentData.name}</p>
      <p>{props.commentData.comment}</p>
      <p>{props.commentData.timestamp}</p>
      <p>{props.commentData.likes}</p>
    </div>
  );
}

export default Comment;
