import "./App.css";
import API from "@aws-amplify/api";
import React from "react";
import ReactDOM from "react-dom";
import { VictoryBar } from "victory";

function App() {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <div className="App">
      <VictoryBar data={data} x="quarter" y="earnings" />
      <button onClick={() => console.log("hi")}>hi</button>
    </div>
  );
}

export default App;
