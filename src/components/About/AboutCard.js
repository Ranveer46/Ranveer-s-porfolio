import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const activities = [
    "Solving DSA problems — 500+ solved across platforms (LeetCode ~1500)",
    "Building Agentic AI & full-stack distributed systems",
    "Participating & winning national hackathons (SIH 2025, IIT Patna)",
    "Exploring LLMs, RAG pipelines, MCP tools & cloud architecture",
  ];

  return (
    <div className="quote-card-view">
      <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "1em", marginBottom: "20px" }}>
        Hi Everyone, I am <span className="highlight-cyan" style={{ fontWeight: 700 }}>Ranveer Pensalwar</span> from{" "}
        <span className="highlight-cyan" style={{ fontWeight: 600 }}>Pune, India</span>.
        <br />
        I am a final-year B.Tech student in Information Technology at{" "}
        <strong style={{ color: "var(--text-primary)" }}>Vishwakarma Institute of Information Technology (VIIT)</strong>,
        holding an academic GPA of <strong style={{ color: "var(--text-primary)" }}>8.72/10</strong>.
        <br /><br />
        I specialize in <strong style={{ color: "var(--text-primary)" }}>Full-Stack Engineering, NLP pipelines, and Agentic AI Architecture</strong>.
        With proven industry experience at the <strong style={{ color: "var(--text-primary)" }}>Rajiv Gandhi Science &amp; Technology Commission</strong> and{" "}
        <strong style={{ color: "var(--text-primary)" }}>Turning Point (Canada)</strong>, I love engineering systems that take ideas from design to real-world scale.
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
        {activities.map((act, i) => (
          <li key={i} className="about-activity" style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <ImPointRight style={{ color: "var(--cyan)", marginTop: "4px", flexShrink: 0 }} />
            <span>{act}</span>
          </li>
        ))}
      </ul>

      <p style={{ color: "var(--cyan)", fontStyle: "italic", fontSize: "0.95em", borderLeft: "3px solid var(--cyan)", paddingLeft: "14px", marginBottom: "8px" }}>
        "Strive to build products that solve real-world problems at scale."
      </p>
      <footer style={{ color: "var(--text-muted)", fontSize: "0.82em" }}>— Ranveer</footer>
    </div>
  );
}

export default AboutCard;
