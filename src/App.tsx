import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReleaseButton } from "./components/ReleaseButton";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner />

        {/* <ReleaseButton /> */}
      </header>
    </div>
  );
}

export default App;
