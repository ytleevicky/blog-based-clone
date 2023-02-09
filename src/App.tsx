import React, { Fragment } from "react";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <Fragment>
      {/* <Navbar name="Vicky" messageCount={20} isLoggedIn={false}/> */}
      <Navbar />
      <HeroSection />
    </Fragment>
  );
}

export default App;
