import { Users } from '../../dummyData'
import Online from '../online/Online'
import './rightbar.css'

export default function Rightbar() {
  const componentDidMount=()=> {
    this.calculateTotalCount();
  }

    let totalCount = 0;
    Users.forEach((u) => {
      totalCount += 1;
    });
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/Assets/gift-box.png" alt="birthday" />
          <span className="birthdayText"><b>John</b> and <b>{totalCount} others friends</b> have birthday today.</span>
        </div>
        <img className='rightbarAdImg' src="/Assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className='rightbarFriendsList'>
            {Users.map(u=>(
              <Online key={u.id} user ={u}/>
            ))}
        </ul>
      </div>
    </div>
  )
}
