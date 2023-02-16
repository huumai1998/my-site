import React, { useEffect } from "react";
import { Nav } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, Main, Repositories, Skills } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Nav />
      <Router>
        <Main />
        <Skills />
        <Repositories />
        <Footer />
      </Router>
    </>
  );
}

export default App;
