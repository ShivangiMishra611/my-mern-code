import React from "react";

import "./App.css";
import img from "./digi_logo.png";

function App() {
  return (
    <div className="mycss">
      <div className="col-2 mx-auto">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <h1 className="text-center">Welcome to Digipodium</h1>
    </div>
  );
}

export default App;