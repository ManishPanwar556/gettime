import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  function getTime() {
    return new Date().toLocaleTimeString().substring(0, 7);
  }
  const [state, setState] = useState(getTime);
  function updateTime() {
    console.log(state);
    setState(getTime);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
