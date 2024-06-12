import React from "react";
import "./App.scss";
import Navbar from "./molecules/Navbar";
import Books from "./molecules/Books";
import BottomNav from "./molecules/BottomNav";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Navbar pageName="Home" />
      <br />
      <Books type="latest" />
      {/* </header> */}
      <BottomNav />
    </div>
  );
}

export default App;
