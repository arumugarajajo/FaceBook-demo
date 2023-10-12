import "./sidebar.css"
import {RssFeed,Chat,VideocamSharp,Event,School,WorkOutline,HelpOutline,Bookmark,PlayCircleFilledOutlined,QuestionAnswer,Work} from "@mui/icons-material"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed </span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chat </span>
          </li>
          <li className="sidebarListItem">
            <VideocamSharp className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos </span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">School </span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">WorkOutline </span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">HelpOutline </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmark </span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">PlayCircleFilledOutlined </span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswer className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions </span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs </span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/man-4.webp" alt="1" />
            <span className="sidebarFriendUserName">Raja</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/man-5.jpg" alt="2" />
            <span className="sidebarFriendUserName">John</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/man-1.jpg" alt="3" />
            <span className="sidebarFriendUserName">Hari</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/girl-1.jpg" alt="4" />
            <span className="sidebarFriendUserName">Stella</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/girl-2.jpg" alt="5" />
            <span className="sidebarFriendUserName">Rosey</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/girl-3.webp" alt="6" />
            <span className="sidebarFriendUserName">Danniel joes</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/girl-4.webp" alt="7" />
            <span className="sidebarFriendUserName">Amber</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/girl-5.jpg" alt="8" />
            <span className="sidebarFriendUserName">Scrottie</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/girl-6.jpg" alt="9" />
            <span className="sidebarFriendUserName">Julliet</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./Assets/profile-images/girl-7.jpg" alt="10" />
            <span className="sidebarFriendUserName">Noicce</span>
          </li>
          
        </ul>
      </div>
    </div>
  )
}
