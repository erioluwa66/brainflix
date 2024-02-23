import './CommentCard.scss'

// Comment component takes in props and returns JXN for a single comment 
function Comment(props) {
    return (
        <div className="comment">
            <div className="comment__img"></div>
            <div className="comment__data">
                <div className="comment__data-info">
                    <p className="comment__data-info-name">{props.name}</p>
                    <p className="comment__data-info-time"></p>
                </div>
                <p className="comment__data-comment">{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment