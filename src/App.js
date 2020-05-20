import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import BuildOrderVisualizer from "./components/BuildOrderVisualizer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BuildOrderVisualizer />
    </div>
  );
}

export default App;
