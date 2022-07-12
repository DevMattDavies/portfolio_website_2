import "./Splash-Icons.modules.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function SplashIcons() {
  return (
    <div className="splash-icons-container">
      <div className="vertical-line"></div>
      <TwitterIcon className="splash-icon" fontSize="large" />
      <LinkedInIcon className="splash-icon" fontSize="large" />
      <GitHubIcon className="splash-icon" fontSize="large" />
      <div className="vertical-line"></div>
    </div>
  );
}

export default SplashIcons;
