import logo from "./logo.svg";
import "./App.css";
import CountDownTimer from "./components/CountDownTimer";

function App() {
  return (
    <div className="App">
      <CountDownTimer initialCount={10} />
    </div>
  );
}

export default App;
