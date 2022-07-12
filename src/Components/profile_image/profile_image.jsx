import './profile_image.modules.css'
import Profile from '../../assets/profile_image.jpeg'

function ProfileImage() {
  return (
    <img src={Profile} className="profile-img" alt="my profile image" ></img>
  )
}

  export default ProfileImage;