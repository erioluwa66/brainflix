import CommentCard from '../CommentCard/CommentCard';
import CommentForm from '../CommentForm/CommentForm';

import './Comment.scss'

function Comment({ selected }) {
  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here if needed
  }

  return (
    <section className="comment">
      <h3 className="comment__title">3 Comments</h3>
      <CommentForm handleSubmit={handleSubmit} />

      {selected.comments.map(comment => (
        <CommentCard key={comment.id} commentData={comment} />
      ))}
    </section>
  );
}

export default Comment;