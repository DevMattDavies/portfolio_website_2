import "./App.css";
import SplashIcons from "../Components/Splash-Icons/Splash-Icons";
import Splash from "../Components/Splash/Splash";
import About from "../Components/About/About";

function App() {
  return (
    <div className="App">
      <div className="side-icons">
        <SplashIcons />
      </div>
      <div className="main">
        <Splash />
        <About />
      </div>
    </div>
  );
}

export default App;
