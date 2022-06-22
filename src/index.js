import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Line } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Line
          y={50}
          points={[10, 70, 40, 23, 150, 60, 250, 20]}
          stroke={"blue"}
          strokeWidth={10}
          lineCap={"round"}
          lineJoin={"round"}
          /*
           * line segments with a length of 29px with a gap
           * of 20px followed by a line segment of 0.001px (a dot)
           * followed by a gap of 20px
           */
          dash={[29, 20, 0.001, 20]}
          draggable
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
