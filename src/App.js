import React, { useEffect } from "react";
import { Nav } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { Main, Repositories, Skills } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.refresh({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

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
