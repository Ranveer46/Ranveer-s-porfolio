import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Agentic AI Specialist",
          "NLP & Backend Engineer",
          "7x Hackathon Winner",
          "Smart India Hackathon '25 Winner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 45,
        delay: 60,
      }}
    />
  );
}

export default Type;
