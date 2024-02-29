import CommentCard from '../CommentCard/CommentCard';
import CommentForm from '../CommentForm/CommentForm';

import './Comment.scss'

function Comment({ selected, handleSubmit, handleDelete }) {
  return (
    <section className="comment">
      <h3 className="comment__title">{selected.comments.length} Comments</h3>
      <CommentForm handleSubmit={handleSubmit} />
      {selected.comments.sort((a,b) => {
        return b.timestamp - a.timestamp
      }).map(comment => (
        <CommentCard key={comment.id} commentData={comment} handleDelete={handleDelete} />
      ))}
    </section>
  )
}

export default Comment;
