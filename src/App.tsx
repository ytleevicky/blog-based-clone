import React, { Fragment } from "react";
import "./App.css";
import { Articles } from "./components/Articles";
import { ExploreHeader } from "./components/ExploreHeader";
import { ExploreOptions } from "./components/ExploreOptions";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <ExploreHeader />
      <ExploreOptions />
      <Articles />
    </Fragment>
  );
}

export default App;
