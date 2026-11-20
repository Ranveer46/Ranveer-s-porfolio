import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AchievementCard from "./AchievementCard";
import aitHackathon from "../../Assets/Projects/ait.png";
import iitHackathon from "../../Assets/Projects/iit.png";
import mmitProject from "../../Assets/Projects/mmit.png";
import startupSaga from "../../Assets/Projects/starupsaga.png";
import sih from "../../Assets/Projects/sih.png";

const achievements = [
  {
    title: "Winner — Smart India Hackathon 2025",
    description:
      "Won SIH 2025 in the Open Innovation – Smart Education category for Gradus, an agentic AI learning platform with 1,000+ users.",
    date: "2025",
    imgPath: sih,
  },
  {
    title: "1st Place — HackMatrix, IIT Patna",
    description:
      "Secured 1st position at HackMatrix, a prestigious national-level hackathon organized by IIT Patna.",
    date: "2025",
    imgPath: iitHackathon,
  },
  {
    title: "1st Place — NEF Innovation Award",
    description:
      "Secured 1st place in the National Education Foundation (NEF) Innovation challenge for outstanding technical implementation.",
    date: "2025",
    imgPath: iitHackathon,
  },
  {
    title: "Winner — Startup Saga (Best Pitch & Funding)",
    description:
      "Secured Winner title for Best Pitch & Mock Funding at Startup Saga for pitching an AI-driven startup ecosystem.",
    date: "2025",
    imgPath: startupSaga,
  },
  {
    title: "2nd Place — DIPEX 2026 State Level",
    description:
      "Awarded 2nd place in the prestigious state-level DIPEX exhibition and innovation showcase.",
    date: "2026",
    imgPath: mmitProject,
  },
  {
    title: "2nd Place — AIT Pune Hackathon",
    description:
      "Secured runner-up position among 1,800+ participants competing from across India at AIT Pune Hackathon.",
    date: "2025",
    imgPath: aitHackathon,
  },
  {
    title: "2nd Place — Project Presentation @ MMIT Pune",
    description:
      "Awarded 2nd place for technical presentation, architecture design, and live product demonstration at MMIT Pune.",
    date: "2025",
    imgPath: mmitProject,
  },
];

/* Stats strip */
const stats = [
  { value: "7x", label: "Hackathon Winner" },
  { value: "1K+", label: "Platform Users" },
  { value: "500+", label: "DSA Problems" },
  { value: "1800+", label: "Competitors Outperformed" },
];

function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Header */}
        <div className="section-header">
          <p className="section-eyebrow">Recognition &amp; Honors</p>
          <h1 className="project-heading">
            <strong className="highlight-cyan">7x Hackathon</strong> Winner &amp; Awards
          </h1>
          <p className="section-sub">
            National championships won, top podium finishes, and ideas validated at premier institutions.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Stats strip */}
        <div className="stats-strip">
          {stats.map((s, i) => (
            <div key={i} className="stats-item">
              <span className="stats-value highlight-cyan">{s.value}</span>
              <span className="stats-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          {achievements.map((ach, index) => (
            <Col md={4} className="project-card" key={index}>
              <AchievementCard
                title={ach.title}
                description={ach.description}
                date={ach.date}
                imgPath={ach.imgPath}
                index={index}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
