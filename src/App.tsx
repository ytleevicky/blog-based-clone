import React, { Fragment } from "react";
import "./App.css";
import { Articles } from "./components/Articles";
import { ExploreHeader } from "./components/ExploreHeader";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <ExploreHeader />
      <Articles />
    </Fragment>
  );
}

export default App;
