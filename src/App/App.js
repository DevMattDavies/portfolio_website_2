import "./App.css";
import SplashIcons from "../Components/Splash-Icons/Splash-Icons";
import Splash from "../Components/Splash/Splash";
import About from "../Components/About/About";
import TechStack from "../Components/TechStack/TechStack";

function App() {
  return (
    <div className="App">
      <div className="side-icons">
        <SplashIcons />
      </div>
      <div className="main">
        <Splash />
        <div className="section-container">
          <About />
        </div>
        <div className="section-container">
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default App;
