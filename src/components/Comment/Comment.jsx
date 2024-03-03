import CommentCard from '../CommentCard/CommentCard';
import CommentForm from '../CommentForm/CommentForm';

import './Comment.scss'

function Comment({ clicked, handleSubmit, handleDelete }) {
  return (
    <section className="comment">
      <h3 className="comment__title">{clicked.comments.length} Comments</h3>
      <CommentForm handleSubmit={handleSubmit} />
      {clicked.comments.sort((a,b) => {
        return b.timestamp - a.timestamp
      }).map(comment => (
        <CommentCard key={comment.id} commentData={comment} handleDelete={handleDelete} />
      ))}
    </section>
  )
}

export default Comment;
