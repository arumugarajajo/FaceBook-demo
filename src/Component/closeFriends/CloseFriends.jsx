import "./closeFriends.css"

export default function CloseFriends({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture} alt="1" />
            <span className="sidebarFriendUserName">{user.userName}</span>
        </li>
    )
}
