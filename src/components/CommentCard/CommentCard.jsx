import './CommentCard.scss'
import Comment from '../Comment/comment'
import CommentForm from '../CommentForm/CommentForm'
import {v4 as uuidv4} from "uuid";

class Comments extends Component {
    state = {
        commentsList: [
            {id: uuid(), name:"Noah Duncan", timestamp: "", comment: ""},
            {id: uuid(), name:"Terry Wong"},
            {id: uuid(), name:"Janice Rodriguez"}
        ]
    }

    render() {
        return(
            <div>
                <h2>3 comments</h2>
                <CommentForm/>
                {this.state}
            </div>
        )
    }
}