import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import {v4 as uuidv4} from "uuid";

function CommentCard() {
      let commentsList = [
            {id: uuidv4(), name:"Noah Duncan", timestamp: "8/11/2023", comment: "Your insights into the future of AI are enlightening! The intersection of technology and ethics is particularly thought-provoking. Keep us updated on the tech front!"},
            {id: uuidv4(), name:"Terry Wong",  timestamp: "8/10/2023", comment: "This video is a fantastic overview of the AI landscape. Your ability to distill complex concepts into digestible content is impressive. Can't wait for more tech insights!"},
            {id: uuidv4(), name:"Janice Rodriguez",  timestamp: "8/9/2023", comment: "Your channel is my go-to-source for staying updated on tech trends. The exploration of AI's future implications is both informative and exciting. Kudos on another excellent video!"}
        ]
        return(
            <div>
                <h2>3 comments</h2>
                <CommentForm/>
                {commentsList.map((comment)=><Comment key={comment.id} name={comment.name} comment={comment.comment}/>)}
            </div>
        )
    }

export default CommentCard