import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Image } from "react-konva";
import useImage from "use-image";

const App = () => {
  const url = "https://konvajs.org/assets/yoda.jpg";
  const [image] = useImage(url);
  const handelMouseOver = (e) => {
    const container = e.target.getStage().container();
    container.style.cursor = "pointer";
  };
  const handelMouseOut = (e) => {
    const container = e.target.getStage().container();
    container.style.cursor = "default";
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image
          image={image}
          onMouseOver={handelMouseOver}
          onMouseOut={handelMouseOut}
          draggable
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
