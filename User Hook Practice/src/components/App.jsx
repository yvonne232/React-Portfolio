import React, { useState } from "react";

function App() {
  setInterval(handleClick, 1000);

  const now = new Date().toLocaleTimeString('en-GB');
  const [time, setTime] = useState(now);

  function handleClick() {
    setTime(new Date().toLocaleTimeString('en-GB'));
  }


  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={handleClick}>Get Time</button>
    </div>
  );
}

export default App;
