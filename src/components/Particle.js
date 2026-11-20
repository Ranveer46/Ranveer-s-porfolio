import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 35, // reduced from 160 for a clean, premium look
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: ["#38bdf8", "#818cf8", "#94a3b8"],
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 0.35,
            straight: false,
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.5,
              sync: false,
            },
          },
          opacity: {
            value: 0.2,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.05,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: false,
            },
          },
          modes: {
            bubble: {
              distance: 120,
              size: 2.5,
              duration: 2,
              opacity: 0.5,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
