import CloseFriends from "../closeFriends/CloseFriends"
import { Users } from '../../dummyData'
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
        <h3>Friend List </h3>
        <ul className="sidebarFriendList">
        {Users.map(u=>(
              <CloseFriends key={u.id} user ={u}/>
            ))}
        </ul>
      </div>
    </div>
  )
}
