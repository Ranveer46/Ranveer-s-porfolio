import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "1K+", label: "Platform Users" },
  { value: "7x", label: "Hackathon Winner" },
  { value: "500+", label: "DSA Problems Solved" },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Introduction */}
        <Row className="justify-content-center">
          <Col md={10} className="home-about-description">
            <p className="section-eyebrow" style={{ textAlign: "center" }}>
              About Me
            </p>
            <h1 style={{ fontSize: "2.4em", marginBottom: "24px", fontWeight: 700 }}>
              Let me <span className="highlight-cyan">introduce</span> myself
            </h1>
            <p className="home-about-body">
              Hi, I'm{" "}
              <b className="highlight-white">Ranveer Pensalwar</b> — a final-year
              B.Tech IT student at VIIT Pune, a <b className="highlight-cyan">7x Hackathon Winner</b>, and an
              aspiring Agentic AI Architect.
              <br />
              <br />
              I'm a{" "}
              <b className="highlight-indigo">Full-Stack Developer &amp; NLP Engineer</b>{" "}
              with hands-on industry experience at the{" "}
              <b className="highlight-cyan">Rajiv Gandhi Science &amp; Technology Commission</b> (Modi Lipi digitization)
              and as an{" "}
              <b className="highlight-cyan">AI Developer at Turning Point (Canada)</b> — where I
              built <b className="highlight-indigo">eventFlow AI</b> using Meta Llama 3.3 70B &amp; Solace PubSub+.
              <br />
              <br />
              I specialize in{" "}
              <b className="highlight-white">
                LLM-powered platforms, RAG pipelines, agentic architectures,
                and scalable backend services
              </b>{" "}
              using Python, Java, JavaScript, React, Next.js, FastAPI, and
              cloud infrastructure.
              <br />
              <br />
              My platform <b className="highlight-cyan">Gradus</b> crossed{" "}
              <b className="highlight-cyan">1,000+ active users</b> and earned the national championship at the prestigious{" "}
              <b className="highlight-indigo">Smart India Hackathon (SIH 2025)</b>. Across national hackathons, I have achieved{" "}
              <b className="highlight-cyan">7x podium and championship wins</b>, building high-impact technology that solves real problems at scale.
            </p>
          </Col>
        </Row>

        {/* Stats row */}
        <Row className="justify-content-center" style={{ marginTop: "24px" }}>
          <Col md={10}>
            <div className="stats-strip">
              {stats.map((s, i) => (
                <div key={i} className="stats-item">
                  <span className="stats-value highlight-cyan">{s.value}</span>
                  <span className="stats-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Social links */}
        <Row className="justify-content-center" style={{ marginTop: "40px" }}>
          <Col md={12} className="home-about-social">
            <h3 style={{ fontSize: "1.05em", letterSpacing: "2.5px", color: "var(--text-muted)", marginBottom: "18px", textTransform: "uppercase" }}>
              Connect With Me
            </h3>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ranveer46"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ranveer-pensalwar-b59b4a25b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:pensalwarranveer@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Email"
                >
                  <MdEmail />
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
