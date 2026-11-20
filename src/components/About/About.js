import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* Bio section */}
          <Row style={{ justifyContent: "center", padding: "10px" }} className="align-items-center">
            <Col md={7} style={{ paddingTop: "20px", paddingBottom: "40px" }}>
              <div className="section-header" style={{ textAlign: "left", marginBottom: "25px" }}>
                <p className="section-eyebrow">Background &amp; Profile</p>
                <h1 style={{ fontSize: "2.3em", fontWeight: 700 }}>
                  Know Who <strong className="highlight-cyan">I Am</strong>
                </h1>
              </div>
              <Aboutcard />
            </Col>
            <Col md={5} className="about-img" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={laptopImg}
                alt="Developer Setup"
                className="img-fluid hero-img-floating"
                style={{ maxWidth: "420px", filter: "drop-shadow(0 20px 45px rgba(129, 140, 248, 0.22))" }}
              />
            </Col>
          </Row>

          {/* Technical Skills & Competencies */}
          <div className="section-header" style={{ marginTop: "40px" }}>
            <p className="section-eyebrow">Core Competencies &amp; Technologies</p>
            <h1 className="project-heading">
              Professional <strong className="highlight-cyan">Skillset</strong>
            </h1>
            <p className="section-sub">
              Full-spectrum technical proficiencies spanning Agentic AI, Cloud Architecture, and Software Engineering.
            </p>
            <div className="section-divider"></div>
          </div>
          <Techstack />

          {/* GitHub Activity */}
          <div style={{ marginTop: "50px" }}>
            <Github />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default About;
