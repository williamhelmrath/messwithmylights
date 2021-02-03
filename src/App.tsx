import React from 'react';
import './App.css';

function App() {

  const handleClick = () => {
    fetch("https://api.lifx.com/v1/lights/all/effects/breathe", {
      method: "POST",
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.REACT_APP_LIFX_KEY}`},
      body: JSON.stringify({
        color: "green",
        persist: false,
        power_on: true
      })
    })
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Mess with my light</button>
    </div>
  );
}

export default App;
