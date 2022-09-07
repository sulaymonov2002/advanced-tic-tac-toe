import { useState } from "react";

// export interface RandomColorProps {
//   color: string;
//   onClick: any;
// }

const RandomColor = () => {
  const [color, setColor] = useState("");
  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return { color, generateColor };
};

export default RandomColor;
