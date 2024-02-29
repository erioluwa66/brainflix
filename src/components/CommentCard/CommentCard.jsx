import './CommentCard.scss'
import dateConvertor from '../../Utils/Utils';;


//comment block constructor
const CommentCard = ({commentData}) => {
    return(
        <article className="comment__card">
            <div className="comment__avatar"></div>
            <div className="comment__body">
                <p className="comment__user">
                    {commentData.name}
                </p>
                <p className="comment__date">
                    {dateConvertor(commentData.timestamp)}
                    
                </p>
                <p className="comment__text">
                    {commentData.comment}
                </p>
            </div>
        </article>
    )
}

export default CommentCard;