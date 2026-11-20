import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Timeline from "./Timeline";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Timeline />
      </Container>
    </Container>
  );
}

export default Experience;
