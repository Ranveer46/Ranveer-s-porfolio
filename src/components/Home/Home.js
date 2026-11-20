import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import HeroConsole from "./HeroConsole";
import { AiOutlineDownload } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import pdf from "../../Assets/Projects/Ranveer Updated resume.pdf";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center" style={{ minHeight: "85vh" }}>
            <Col md={6} lg={6} className="home-header">
              <div className="hero-eyebrow">
                <span className="live-dot"></span> Available for Opportunities
              </div>

              <h1 className="heading">
                Hi, I'm{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋</span>
              </h1>
              <h1 className="heading-name">
                <strong className="main-name gradient-text-hero">Ranveer Pensalwar</strong>
              </h1>

              <div style={{ marginTop: "20px", marginBottom: "24px" }}>
                <Type />
              </div>

              <div className="hero-cta-row">
                <a href={pdf} target="_blank" rel="noreferrer" className="hero-btn-primary">
                  <AiOutlineDownload size={18} /> Download Resume
                </a>
                <a href="https://github.com/Ranveer46" target="_blank" rel="noreferrer" className="hero-btn-ghost">
                  <BsGithub size={18} /> GitHub Profile
                </a>
              </div>

              <div className="hero-scroll-hint">
                <span>Scroll to explore</span>
              </div>
            </Col>

            <Col md={6} lg={6} style={{ paddingBottom: 20, textAlign: "center", position: "relative" }}>
              <HeroConsole />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
