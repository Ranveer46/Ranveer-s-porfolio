import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I’m <b className="purple">Ranveer Pensalwar</b> — a <b className="purple">Full-Stack Developer</b>,
              <b className="purple"> ML Engineer</b> and an aspiring <b className="purple">Agentic AI Architect</b> 🚀
              <br />
              <br />
              I don’t just write code — I <b className="purple">engineer intelligent systems</b> that learn, adapt
              and make real-world impact.
              <br />
              <br />
              I’m fluent in <b className="purple">JavaScript, Python and Java</b>, and specialize in building
              scalable products using <b className="purple">React, Next.js, Node.js</b> and cloud-ready backends.
              <br />
              <br />
              My core passion lies in creating <b className="purple">LLM-powered platforms, Reinforcement Learning systems,
                RAG pipelines, and AI-driven decision engines</b> that solve problems beyond traditional software.
              <br />
              <br />
              From winning national hackathons to developing real-time AI load balancers, mentorship platforms
              and intelligent query-retrieval systems — I aim to build
              <b className="purple">technology that thinks.</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ranveer46"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ranveer-pensalwar-b59b4a25b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="pensalwarranveer1@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
