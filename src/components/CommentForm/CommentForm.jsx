import profilepic from "../../assets/images/Mohan-muruge.jpg"

import './CommentForm.scss'

//CommentForm
function CommentForm({handleSubmit}) {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        handleSubmit();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <img src={profilepic} alt ="Mohan muruge"/>
            </div>
            <div>
                <label htmlFor="comment">JOIN THE CONVERSATION</label>
                <textarea id="comments" name="comment" placeholder="Add a new comment" />
                <button >COMMENT</button>
            </div>

        </form>
    )
}

export default CommentForm;

