import React from "react";
import selfImage from "../../images/self.jpg";
import "./title.css";
import "../../styles.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <section className="home">
      <div className="intro">
        <h1 id="title"></h1>
        <div className="description">
          I am a full stack / mobile developer. I epertise in HTML, CSS,
          Javascript, Python, mySQL, and many more technologies.
        </div>
        {/* Todo add resume */}
        <Button
          className="resume"
          sx={{ color: "black", backgroundColor: "antiquewhite" }}
          size="large"
        >
          Resume
        </Button>
      </div>
      <img src={selfImage} id="img" />
    </section>
  );
}
