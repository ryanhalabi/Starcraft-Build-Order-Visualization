import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import BuildOrderVisualizer from "./components/BuildOrderVisualizer";
import Slider from "@material-ui/core/Slider";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BuildOrderVisualizer />
      <div>
        <Slider
          orientation="vertical"
          defaultValue={30}
          height={300}
          aria-labelledby="vertical-slider"
        />
      </div>
    </div>
  );
}

export default App;
