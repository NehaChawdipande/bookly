import React from "react";
import "./App.css";
import Navbar from "./molecules/Navbar";
import Banner from "./molecules/Banner";
import BottomNav from "./molecules/BottomNav";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Navbar pageName="Home" />
      <br />
      <Banner />
      {/* </header> */}
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
}

export default App;
