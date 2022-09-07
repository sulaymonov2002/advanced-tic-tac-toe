import React, { useRef, useState } from "react";
import "./App.scss";

// import RandomColor from "./hex-btn";

interface AppProps {}

export interface Mode {
  counter: number;
}

const App: React.FC<AppProps> = () => {
  // const { color, generateColor } = RandomColor();
  const [state, setState] = useState({
    counter: 0,
    step: false,
  });

  const inputDelay = useRef<HTMLInputElement>(null);
  const inputStep = useRef<HTMLInputElement>(null);

  const counter = (option: number) => {
    setState({ ...state, step: true });
    setTimeout(() => {
      setState({
        ...state,
        counter: state.counter + +inputStep.current?.value! * option,
        step: false,
      });
    }, +inputDelay.current?.value! * 1000);
  };

  return (
    // <div
    //   className="App"
    //   style={{
    //     backgroundColor: "#" + color,
    //   }}
    // >
    //   <button className="btn" onClick={generateColor}>
    //     RandomColor
    //   </button>
    // </div>

    <div></div>
  );
};

export default App;
