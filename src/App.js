import React from "react";
import { Nav } from "./components";
import { Main, Repositories, Skills } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Main />
        <Skills />
        <Repositories />
      </Router>
    </>
  );
}

export default App;
