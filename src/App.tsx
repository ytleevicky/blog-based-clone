import React, { Fragment } from "react";
import "./App.css";
import { Articles } from "./components/Articles";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <Articles />
    </Fragment>
  );
}

export default App;
