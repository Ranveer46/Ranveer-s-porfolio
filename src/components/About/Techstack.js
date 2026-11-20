import React from "react";

const skillSections = [
  {
    num: "01",
    title: "Generative AI & Agentic Systems",
    badge: "Core strength",
    badgeColor: "#34d399",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents & Multi-Agent Systems",
      "LangChain",
      "LangGraph",
      "Model Context Protocol (MCP)",
      "Prompt Engineering",
      "Tool & Function Calling",
      "LLM Orchestration",
      "Embeddings",
      "Semantic Search",
      "Vector Search",
      "FAISS",
      "ChromaDB",
      "Qdrant",
      "pgvector",
      "OpenAI & Anthropic APIs",
      "Structured Outputs",
      "AI Guardrails & Memory",
    ],
  },
  {
    num: "02",
    title: "Programming Languages",
    badge: null,
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    num: "03",
    title: "Backend Development & Architecture",
    badge: "Production Proven",
    badgeColor: "#38bdf8",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST API Development",
      "Microservices Architecture",
      "Backend System Design",
      "Authentication & Authorization",
      "API Orchestration",
    ],
  },
  {
    num: "04",
    title: "Frontend Development",
    badge: null,
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "UI Development",
      "API Integration",
    ],
  },
  {
    num: "05",
    title: "Artificial Intelligence & Machine Learning",
    badge: null,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Large Language Models (LLMs)",
      "Transformers",
      "Reinforcement Learning",
      "Classification & Regression",
      "Time-Series Forecasting",
      "Anomaly Detection",
      "Recommendation Systems",
      "Model Evaluation & Deployment",
    ],
  },
  {
    num: "06",
    title: "Data Science & Analytics",
    badge: null,
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "Data Preprocessing",
      "Data Visualization",
      "Hypothesis Testing",
      "Correlation & Regression Analysis",
      "Predictive Analytics",
      "Customer Segmentation",
      "A/B Testing",
      "Business Intelligence",
      "Data Interpretation",
    ],
  },
  {
    num: "07",
    title: "Databases & Data Engineering",
    badge: null,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "SQL Database Management",
      "Vector Databases",
      "ETL Pipelines",
      "Data Processing",
      "Document Processing",
      "Data Integration",
    ],
  },
  {
    num: "08",
    title: "Cloud, DevOps & Infrastructure",
    badge: null,
    skills: [
      "Amazon Web Services (AWS)",
      "AWS EC2",
      "AWS ECS",
      "AWS ECR",
      "AWS EFS",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Linux",
      "Cloud Deployment",
      "Infrastructure & Application Deployment",
    ],
  },
  {
    num: "09",
    title: "Developer Tools & AI Observability",
    badge: null,
    skills: [
      "Git & GitHub",
      "Postman",
      "MLflow",
      "LangSmith",
      "Langfuse",
      "Hugging Face",
      "Pytest",
      "MCP",
      "API Testing & Debugging",
    ],
  },
  {
    num: "10",
    title: "Software Engineering & Computer Science",
    badge: null,
    skills: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "System Design",
      "Distributed Systems",
      "Low-Level Design",
      "Software Testing",
      "Debugging & Root Cause Analysis",
      "Functional & Integration Testing",
      "Agile Development",
    ],
  },
  {
    num: "11",
    title: "Professional & Problem-Solving Skills",
    badge: null,
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Technical Research",
      "Critical Thinking",
      "System Architecture",
      "Team Collaboration",
      "Technical Documentation",
      "Project Development & Management",
    ],
  },
];

function Techstack() {
  return (
    <div className="skills-chatgpt-container">
      {skillSections.map((sec, idx) => (
        <div key={idx} className="skills-chatgpt-row">
          {/* Header Line */}
          <div className="skills-chatgpt-header">
            <h3 className="skills-chatgpt-title">
              <span className="skills-chatgpt-num">{sec.num}.</span> {sec.title}
            </h3>
            {sec.badge && (
              <span
                className="skills-chatgpt-badge"
                style={{
                  color: sec.badgeColor || "#34d399",
                  borderColor: `${sec.badgeColor || "#34d399"}40`,
                  background: `${sec.badgeColor || "#34d399"}15`,
                }}
              >
                {sec.badge}
              </span>
            )}
          </div>

          {/* Skill Pills */}
          <div className="skills-chatgpt-pills">
            {sec.skills.map((skill, sIdx) => (
              <span key={sIdx} className="skills-chatgpt-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
