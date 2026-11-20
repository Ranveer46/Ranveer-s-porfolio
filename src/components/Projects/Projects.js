import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Brand New High-Resolution Visual Cards
import coldEmailImg from "../../Assets/Projects/card-cold-email.png";
import gradusImg from "../../Assets/Projects/card-gradus.png";
import eventFlowImg from "../../Assets/Projects/card-eventflow.png";
import modiLipiImg from "../../Assets/Projects/card-modilipi.png";
import arrushRakhiImg from "../../Assets/Projects/card-arrush-rakhi.png";
import cloudShieldImg from "../../Assets/Projects/card-cloudshield.png";
import medicalAiImg from "../../Assets/Projects/card-medical-ai.png";
import prepWiseImg from "../../Assets/Projects/card-prepwise.png";
import walmartImg from "../../Assets/Projects/card-walmart.png";
import phishGuardImg from "../../Assets/Projects/card-phishguard.png";
import deepGuardImg from "../../Assets/Projects/card-deepguard.png";
import rlAgentImg from "../../Assets/Projects/card-rl-loadbalancer.png";
import riskParityImg from "../../Assets/Projects/card-risk-parity.png";
import studentTrackerImg from "../../Assets/Projects/card-student-tracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Project Cards Header */}
        <div className="section-header">
          <p className="section-eyebrow">Portfolio &amp; Open Source</p>
          <h1 className="project-heading">
            Featured <strong className="highlight-cyan">Projects</strong>
          </h1>
          <p className="section-sub">
            Production systems, automation engines, AI platforms &amp; client products.
          </p>
          <div className="section-divider"></div>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* 1. COLD EMAIL AUTOMATION SYSTEM */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coldEmailImg}
              isBlog={false}
              title="Automated HR Cold Email Campaign Engine"
              description="Automated daily cold email outreach system engineered for students to connect with verified HR recruiters. Built with Python, Flask, and GitHub Actions / Windows Task Scheduler to dispatch 50 personalized emails/day. Features a modern dark-mode monitoring dashboard, SQLite zero-duplicate tracking, dynamic HTML/text templates with resume attachments, anti-spam randomized delays (20–40s), and fail-safe crash recovery."
              ghLink="https://github.com/Ranveer46/cold-email-campaign"
              badge="⚡ Automation Tool"
              badgeColor="#38bdf8"
            />
          </Col>

          {/* 2. GRADUS — 1K+ USERS / SIH 2025 WINNER */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gradusImg}
              isBlog={false}
              title="Gradus — Agentic AI Learning Platform"
              description="SIH 2025 Winner & 1,000+ active users. Agentic AI learning ecosystem converting PDFs, images, and videos into structured courses, notes, and quizzes. Engineered with Next.js, FastAPI, Python, Gemini, Qdrant vector search, and Redis caching with personalized learner knowledge graphs."
              ghLink="https://github.com/Ranveer46/Gradus"
              badge="🚀 1,000+ Users · SIH Winner"
              badgeColor="#34d399"
            />
          </Col>

          {/* 3. TURNING POINT — EVENTFLOW AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventFlowImg}
              isBlog={false}
              title="eventFlow AI — Turning Point (Canada)"
              description="Industry-sponsored capstone for Solace Aviation's PubSub+ Event Portal using Meta Llama 3.3 70B & Hugging Face. Designed agentic backend architecture integrating LLM reasoning with MCP tools, persona-based access control, schema validation, and runtime telemetry monitoring."
              ghLink="https://github.com/Ranveer46"
              badge="🎯 Industry Sponsored"
              badgeColor="#818cf8"
            />
          </Col>

          {/* 4. MODI LIPI OCR & NLP PIPELINE */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={modiLipiImg}
              isBlog={false}
              title="Modi Lipi NLP & OCR Digitization"
              description="Built at the Rajiv Gandhi Science & Technology Commission (Pune). Developed an OCR-based NLP pipeline for historical Modi Lipi script digitization, character segmentation, and embedding-based semantic search microservices, paired with an interactive character quiz LMS."
              ghLink="https://github.com/Ranveer46"
              badge="🏛️ Govt Industry Intern"
              badgeColor="#fbbf24"
            />
          </Col>

          {/* 5. CLOUDSHIELD AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudShieldImg}
              isBlog={false}
              title="CloudShield AI — Self-Healing Cloud Orchestrator"
              description="End-to-end cloud infrastructure monitoring and resource management engine combining eBPF telemetry, Digital Twin simulation, and Random Forest failure prediction. Implements Q-learning reinforcement learning for automated mitigation decisions with a real-time analytics dashboard."
              ghLink="https://github.com/Ranveer46"
              badge="🧠 RL & eBPF"
              badgeColor="#38bdf8"
            />
          </Col>

          {/* 6. AI-POWERED MEDICAL TREATMENT INTELLIGENCE */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicalAiImg}
              isBlog={false}
              title="Medical Treatment Intelligence System"
              description="Backend-driven medical platform featuring patient similarity search, recovery prediction, sentiment analysis, and fake review detection. Built with Python, Neo4j graph databases, XGBoost, SHAP explainability, and FastAPI microservices."
              ghLink="https://github.com/Ranveer46"
              badge="🔬 Graph AI & ML"
              badgeColor="#34d399"
            />
          </Col>

          {/* 7. FREELANCE — ARRUSH RAKHI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arrushRakhiImg}
              isBlog={false}
              title="Arrush Rakhi — E-Commerce Platform"
              description="Paid client freelance delivery: full-stack e-commerce web platform for Arrush Rakhi. Features responsive product catalogue, persistent shopping cart, secure checkout flow, and custom admin dashboard built on the MERN stack."
              ghLink="https://github.com/Ranveer46"
              badge="💼 Freelance · Paid"
              badgeColor="#fbbf24"
            />
          </Col>

          {/* 8. PREPWISE AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prepWiseImg}
              isBlog={false}
              title="PrepWise AI"
              description="AI-powered interview preparation platform built with Next.js, Firebase, and Google Gemini. Features real-time AI mock interviews with voice interaction, instant performance feedback, skill assessment analytics, and personalized coaching tracks for SDE, DS, and PM."
              ghLink="https://github.com/Ranveer46/prepAI"
              demoLink="https://prepwise-ai-rho.vercel.app/"
              badge="🎙️ Mock Interview AI"
              badgeColor="#a855f7"
            />
          </Col>

          {/* 9. WALMART SPARKATHON 2025 – SCANPAY */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={walmartImg}
              isBlog={false}
              title="Walmart Sparkathon 2025 – ScanPay"
              description="AI-powered mobile retail platform combining ultra-fast checkout with personalized meal planning. Features 'Check & Go' for instant scanning and 'Shop & Simmer' for dietary recipe recommendations. Built with React and Firebase to reduce checkout time by 60%."
              ghLink="https://github.com/Ranveer46/ScanAndPay/tree/main/final%20project%20walmart"
              badge="🛒 Top Finalist"
              badgeColor="#fbbf24"
            />
          </Col>

          {/* 10. PHISHGUARD AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phishGuardImg}
              isBlog={false}
              title="PhishGuard AI"
              description="State-of-the-art ML system detecting phishing URLs with 100% accuracy using Random Forest & XGBoost ensemble. Features real-time analysis (<500ms), dynamic risk scoring, and explainable AI visualizations. Built with Streamlit and trained on 235k+ URLs."
              ghLink="https://github.com/Ranveer46/phishing"
              badge="🔒 Cybersecurity"
              badgeColor="#f43f5e"
            />
          </Col>

          {/* 11. DEEPGUARD */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepGuardImg}
              isBlog={false}
              title="DeepGuard — Autonomous Threat Hunter"
              description="Real-Time Compression-Robust Deepfake Detection system. Features multi-modal ensemble detection (Visual + Audio), compression robustness (>85% acc), and explainable AI (Grad-CAM). Built with PyTorch, FastAPI, Streamlit, and Docker for <300ms latency."
              ghLink="https://github.com/Ranveer46/seedhacathon"
              badge="🛡️ Deepfake Defense"
              badgeColor="#818cf8"
            />
          </Col>

          {/* 12. RL LOAD BALANCER */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rlAgentImg}
              isBlog={false}
              title="RL-Based Load Balancer"
              description="Developed a simulation-driven load balancing environment modeling traffic spikes using Python, Flask, FastAPI, and Deep Q-Network. Implemented Double DQN with Dueling architecture and Prioritized Experience Replay for adaptive request routing, achieving 25% lower response time."
              ghLink="https://github.com/Ranveer46/RL-Load-Balancer"
              badge="⚙️ Reinforcement Learning"
              badgeColor="#38bdf8"
            />
          </Col>

          {/* 13. RISK PARITY ENGINE */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riskParityImg}
              isBlog={false}
              title="Risk Parity Portfolio Optimization"
              description="Built a risk parity backtesting engine using Python, Pandas, NumPy, and Matplotlib. Implemented inverse-volatility allocation strategy and benchmarked portfolio performance against NASDAQ. Designed for robust financial analysis and portfolio management."
              ghLink="https://github.com/Ranveer46/Risk-Parity-Engine"
              badge="📈 Quant Finance"
              badgeColor="#fbbf24"
            />
          </Col>

          {/* 14. STUDENT TRACKER MERN */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentTrackerImg}
              isBlog={false}
              title="Student CP & DSA Analytics Platform"
              description="Full-stack platform tracking student progress across competitive programming platforms. Features real-time LeetCode and Codeforces synchronization, contest rating analytics, problem categorization heatmaps, and automated study reminders built with Node.js and MongoDB."
              ghLink="https://github.com/Ranveer46"
              badge="📊 DSA Analytics"
              badgeColor="#34d399"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
