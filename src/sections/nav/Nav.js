import React from "react";
import { Button } from "@mui/material";

export default function Nav({ section, setSection }) {
  console.log(section);
  return (
    <div className="nav">
      <div className="buttons">
        <Button
          sx={{
            marginBottom: 2,
            backgroundColor: section == "home" ? "antiquewhite" : "transparent",
            color: section == "home" ? "black" : "antiquewhite",
          }}
          onClick={() => {
            setSection("home");
          }}
          size="large"
        >
          Home
        </Button>
        <Button
          sx={{
            marginBottom: 2,
            backgroundColor:
              section == "about" ? "antiquewhite" : "transparent",
            color: section == "about" ? "black" : "antiquewhite",
          }}
          onClick={() => {
            setSection("about");
          }}
          size="large"
        >
          About
        </Button>
        <Button
          sx={{
            marginBottom: 2,
            backgroundColor:
              section == "services" ? "antiquewhite" : "transparent",
            color: section == "services" ? "black" : "antiquewhite",
          }}
          onClick={() => {
            setSection("services");
          }}
          size="large"
        >
          Services
        </Button>

        <Button
          sx={{
            marginBottom: 2,
            backgroundColor:
              section == "projects" ? "antiquewhite" : "transparent",
            color: section == "projects" ? "black" : "antiquewhite",
          }}
          onClick={() => {
            setSection("projects");
          }}
          size="large"
        >
          Projects
        </Button>

        <Button
          sx={{
            marginBottom: 2,
            backgroundColor:
              section == "contact" ? "antiquewhite" : "transparent",
            color: section == "contact" ? "black" : "antiquewhite",
          }}
          onClick={() => {
            setSection("contact");
          }}
          size="large"
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
