import "./Splash.modules.css";
import SplashLine from '../../assets/splash-line.png'
import SplashMenu from "../Splash-Menu/Splash-Menu";
import SplashIcons from "../Splash-Icons/Splash-Icons";

function Splash() {
  return (
    <div className="splash-container">
      <div className="icons-container">
        <SplashIcons />
      </div>
    <img src={SplashLine}></img>
        <div className="menu-container">
          <SplashMenu />
        </div>
      </div>
  );
}

export default Splash;
