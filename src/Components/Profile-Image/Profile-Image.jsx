import "./Profile-Image.css";
import ProfilePicture from "../../assets/me.jpeg";

function ProfileImage() {
  return (
    <div className="image-container">
      <img
        className="profile-img"
        src={ProfilePicture}
        alt='my profile'
      ></img>
    </div>
  );
}

export default ProfileImage;
