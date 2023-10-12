import "./post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from "../../dummyData"

export default function Post({post}) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                        <span className="postUserName">{Users.filter(u=>u.id===post.userId)[0].userName}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postCenterImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postBottomImg" src="/Assets/heart.png" alt="Heart" />
                        <img className="postBottomImg" id="like" src="/Assets/like.png" alt="Heart" />
                        <span className="postLike">{post.like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
