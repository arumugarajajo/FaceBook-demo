import "./online.css"

export default function Online({user}) {
  return (
        <li className='rightbarFriendsName'>
            <div className="rightbarOnlineFriendProfile">
              <img className='rightbarOnlineProfileImg' src={user.profilePicture} alt="" />
              <span className='rghtbarOnline'></span>
            </div>
            <span className="rightbarUserName">{user.userName}</span>
          </li>
  )
}
