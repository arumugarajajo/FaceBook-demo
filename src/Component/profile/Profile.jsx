import "./profile.css"
import Topbar from "../../Component/topbar/Topbar";
import Sidebar from "../../Component/sidebar/Sidebar";
import Rightbar from "../../Component/rightbar/Rightbar";
import Feed from "../../Component/feed/Feed";
export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className="profileCoverImg" src="/Assets/post/post-5.jpg" alt="" />
                        <img className="profileUserImg" src="/Assets/profile-images/girl-1.jpg" alt="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Raja</h4>
                            <span className="profileInfoDesc">Hello there, This is Raja!</span>
                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>

            </div>

        </>
    )
}
