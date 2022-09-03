import "./App.css";
import Parrot from "./Parrot.json";

import Lottie from "lottie-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "20%" }}>
          <Lottie loop={true} animationData={Parrot} />
        </div>

        <p>Lottie React App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
