import React from "react";
import { MdWork, MdStorefront, MdTrendingUp, MdPsychology } from "react-icons/md";

const timelineData = [
  {
    year: "3rd Year — Industry Internship",
    icon: <MdWork size={20} color="#38bdf8" />,
    color: "#38bdf8",
    title: "NLP Software Engineer Intern — Rajiv Gandhi Science & Technology Commission",
    description:
      "Interned at the Rajiv Gandhi Science & Technology Commission (Pune) as an NLP Software Engineer. Built an OCR-based NLP pipeline for Modi Lipi digitization, text processing, and structured data extraction using Python. Implemented embedding-based semantic search via Python microservices and created an interactive Modi Lipi learning platform with character recognition, quizzes, and progress assessment.",
    tags: ["Python", "OCR", "NLP", "Modi Lipi", "Semantic Search", "Microservices", "Embeddings"],
    type: "Industry",
  },
  {
    year: "3rd Year — Freelance Project (Paid)",
    icon: <MdStorefront size={20} color="#fbbf24" />,
    color: "#fbbf24",
    title: "Arrush Rakhi — E-Commerce Platform",
    description:
      "Delivered a full-stack e-commerce web application for Arrush Rakhi as a paid freelance engagement. Built product catalogue, cart system, secure checkout flow, and admin dashboard — giving the client a complete online sales platform.",
    tags: ["MERN Stack", "E-Commerce", "Freelance", "MongoDB", "Express"],
    type: "Freelance",
  },
  {
    year: "3rd Year — Milestone Landmark",
    icon: <MdTrendingUp size={20} color="#34d399" />,
    color: "#34d399",
    title: "Gradus Crosses 1,000+ Users & SIH '25 National Win",
    description:
      "Gradus — the Agentic AI Learning Platform built during 3rd year — crossed 1,000 active users, validating real-world product-market fit. Built with Next.js, FastAPI, Python, Gemini, Qdrant, Firebase, and Redis. Won Smart India Hackathon 2025 (Open Innovation – Smart Education).",
    tags: ["1K+ Users", "SIH 2025 Winner", "Gradus", "AI Platform", "Real-World Impact"],
    type: "Milestone",
  },
  {
    year: "4th Year, Sem 1 — Industry Sponsored Project",
    icon: <MdPsychology size={20} color="#818cf8" />,
    color: "#818cf8",
    title: "AI Developer — Turning Point (Canada, Remote)",
    description:
      "Worked remotely as an AI Developer at Turning Point (Canada) on an industry-sponsored capstone. Built eventFlow AI — an AI-powered natural language assistant for Solace Aviation's PubSub+ Event Portal using Meta Llama 3.3 70B and Hugging Face Inference API. Designed an agentic backend architecture integrating LLM reasoning with MCP tools, persona-based access control, schema resolution, request validation, and runtime monitoring.",
    tags: ["LLM", "Meta Llama 3.3 70B", "MCP", "Agentic AI", "FastAPI", "Solace PubSub+", "Hugging Face"],
    type: "Industry",
  },
];

const typeBadgeStyle = {
  Industry: { background: "rgba(56, 189, 248, 0.12)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)" },
  Freelance: { background: "rgba(251, 191, 36, 0.12)", color: "#fbbf24", border: "1px solid rgba(251, 191, 36, 0.3)" },
  Milestone: { background: "rgba(52, 211, 153, 0.12)", color: "#34d399", border: "1px solid rgba(52, 211, 153, 0.3)" },
};

function Timeline() {
  return (
    <div className="timeline-section">
      <h2 className="project-heading" style={{ textAlign: "center", marginBottom: "10px" }}>
        My <strong className="highlight-cyan">Journey</strong> &amp; Experience
      </h2>
      <p style={{ color: "var(--text-secondary)", textAlign: "center", marginBottom: "50px", fontSize: "1.05em" }}>
        A timeline of real-world projects, industry work &amp; milestones
      </p>

      <div className="timeline-wrapper">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-dot" style={{ borderColor: item.color, boxShadow: `0 0 16px ${item.color}40` }}>
              {item.icon}
            </div>
            <div className="timeline-card">
              <div className="timeline-year" style={{ color: item.color }}>
                {item.year}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                <h5 className="timeline-title">{item.title}</h5>
                {typeBadgeStyle[item.type] && (
                  <span
                    style={{
                      ...typeBadgeStyle[item.type],
                      padding: "2px 10px",
                      borderRadius: "20px",
                      fontSize: "0.72em",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.type}
                  </span>
                )}
              </div>
              <p className="timeline-desc">{item.description}</p>
              <div className="timeline-tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="timeline-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="timeline-line" />
      </div>
    </div>
  );
}

export default Timeline;
