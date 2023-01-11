import React from "react";
import { Nav } from "./components";
import { Main, Skills } from "./pages";
import { BrowserRouter as Router, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Main />
        <Skills />
      </Router>
    </>
  );
}

export default App;
