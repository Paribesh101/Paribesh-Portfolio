import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Home from "./sections/home/Home";
import Nav from "./sections/nav/Nav";

function App() {
  const [section, setSection] = useState("home");

  return (
    <div className="App">
      <Nav section={section} setSection={setSection} />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
