import "./CommentList.scss";
import Form from "./Form";
import Comment from "./Comment";

// This is destructuring
function CommentList({ commentsData, postNewComment, deleteComment }) {
  return (
    <div className="comment-list">
      <p className="comment-list__counter">{commentsData.length} Comments</p>
      {/* postNewComment function is being passed to the postNewComment within the Form component. */}
      <Form postNewComment={postNewComment} />
      <div>
        {/* We are doing map because we want to have commentsData have the Comment component.
        Using this, we can access an individual comment.
        For each of the individual component, we are giving it a comment, id, and delete functionality */}
        {commentsData.map((comment) => (
          <Comment
            key={comment.id}
            commentData={comment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentList;
