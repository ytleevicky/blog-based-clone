import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Articles } from "./components/Articles";
import { ArticlesAsk } from "./components/ArticlesAsk";
import { ArticlesJob } from "./components/ArticlesJob";
import { ArticlesShow } from "./components/ArticlesShow";
import { ExploreHeader } from "./components/ExploreHeader";
import { ExploreOptions } from "./components/ExploreOptions";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <HeroSection />
        <ExploreHeader />
        <ExploreOptions />

        <Routes>
          <Route
            path="/"
            element={<Articles />}
          />
          <Route
            path="/job"
            element={<ArticlesJob />}
          />
          <Route
            path="/ask"
            element={<ArticlesAsk />}
          />
          <Route
            path="/show"
            element={<ArticlesShow />}
          />
        </Routes>

        {/* <Articles /> */}
      </Fragment>
    </Router>
  );
}

export default App;
