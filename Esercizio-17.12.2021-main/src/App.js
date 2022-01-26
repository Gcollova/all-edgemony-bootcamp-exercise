import { useReducer } from "react";
import React, { useState } from "react";

import Main from "./Components/Main";

import "./App.css";

function App() {
  const [myData, setData] = useState({
    text: "Avvia un Re-Roll!",
    soure_url: "",
  });
  const Fetching = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  const resource = {
    url: "https://uselessfacts.jsph.pl/random.json?language=en",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "reRoll":
        return Fetching("https://uselessfacts.jsph.pl/random.json?language=en");
      default:
        return { url: "https://uselessfacts.jsph.pl/random.json?language=en" };
    }
  };

  const Dispatcher = () => {
    const [state,dispatch] = useReducer(reducer, resource);
      if(state===2){
        console.log(state)

      }
    
    
    
    return (
      <>
      
      <button onClick={() => dispatch({ type: "reRoll" })}>Re-Roll</button>
      </>
    );
  };

  return (
    <div className="App">
      <Main data={myData} />
      <Dispatcher />
      <button
        onClick={() => setData({ text: "Avvia un Re-Roll!", soure_url: "" })}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
