import "./splash.modules.css";
import ProfileImage from "../profile_image/profile_image";

function Splash() {
  return (
    <div className="splash-page">
      <div className="title">
        <h1>Hi I'm Matt</h1>
      </div>
      <div className="image">
        <ProfileImage />
      </div>
    </div>
  );
}

export default Splash;
