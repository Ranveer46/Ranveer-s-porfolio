import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import phishGuard from "../../Assets/Projects/phisguard.png";
import deepGuard from "../../Assets/Projects/cyber.png";
import gemma from "../../Assets/Projects/gradus.png";
import scanPay from "../../Assets/Projects/scanpay.png";
import contentStack from "../../Assets/Projects/chatagentplatform.png";
import gradus from "../../Assets/Projects/gradus2.png";
import rlAgent from "../../Assets/Projects/rl agent.png";
import riskParity from "../../Assets/Projects/student.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phishGuard}
              isBlog={false}
              title="PhishGuard AI"
              description="State-of-the-art ML system detecting phishing URLs with 100% accuracy using Random Forest & XGBoost ensemble. Features real-time analysis (<500ms), dynamic risk scoring, and explainable AI visualizations. Built with Streamlit and trained on 235k+ URLs."
              ghLink="https://github.com/Ranveer46/phishing"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepGuard}
              isBlog={false}
              title="DeepGuard"
              description="Real-Time Compression-Robust Deepfake Detection system. Features multi-modal ensemble detection (Visual + Audio), compression robustness (>85% acc), and explainable AI (Grad-CAM). Built with PyTorch, FastAPI, Streamlit, and Docker for <300ms latency."
              ghLink="https://github.com/Ranveer46/seedhacathon"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemma}
              isBlog={false}
              title="AI Educational Assistant"
              description="Intelligent educational assistant powered by Google Gemma. Features textbook image analysis (OCR), Text Q&A, Concept Explanation, and Multi-language support. Built with Streamlit, Transformers (Google Gemma 3n), OpenCV, and PyTorch."
              ghLink="https://github.com/Ranveer46/Gemma"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scanPay}
              isBlog={false}
              title="Walmart Sparkathon 2025 – ScanPay"
              description="AI-powered mobile retail platform combining ultra-fast checkout with personalized meal planning. Features 'Check & Go' for instant scanning and 'Shop & Simmer' for dietary recipe recommendations. Built with React and Firebase to reduce checkout time by 60%."
              ghLink="https://github.com/Ranveer46/ScanAndPay/tree/main/final%20project%20walmart"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contentStack}
              isBlog={false}
              title="Contentstack Chat Agent Platform"
              description="Enterprise-ready plug-and-play platform to build, deploy, and manage domain-specific LLM chat agents on Contentstack CMS. Supports MCP orchestration, OAuth-based authentication, multi-provider LLM routing (OpenAI, Claude), vector-based RAG with document ingestion (PDF, DOCX, HTML), real-time streaming responses, role-based agent management, analytics dashboard, and scalable microservices architecture."
              ghLink="https://github.com/Ranveer46/contentstackdeployment"
              demoLink="#"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riskParity} // Using a placeholder for now
              isBlog={false}
              title="Student Tracker MERN"
              description="Full-stack competitive programming tracker built with MERN stack to motivate and track student progress. Features Codeforces integration, automated email reminders using Node-cron, and rich analytics dashboards with Chart.js. Includes CSV export and role-based management."
              ghLink="https://github.com/Ranveer46/student-tracker-mern"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gradus}
              isBlog={false}
              title="Gradus"
              description="Agentic AI Learning Platform built with React, Next.js, Firebase, Redis, and Gemini 2.0. Converted YouTube videos into structured learning flows with AI-generated summaries, quizzes, and learner profile graphs. Features a node-based learner profile graph to track learning paths."
              ghLink="https://github.com/Ranveer46/Gradus"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riskParity}
              isBlog={false}
              title="Risk Parity Portfolio Optimization"
              description="Built a risk parity backtesting engine using Python, Pandas, NumPy, and Matplotlib. Implemented inverse-volatility allocation strategy and benchmarked portfolio performance against NASDAQ. Designed for robust financial analysis and portfolio management."
              ghLink="https://github.com/Ranveer46/Risk-Parity-Engine"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rlAgent}
              isBlog={false}
              title="RL-Based Load Balancer"
              description="Developed a simulation-driven load balancing environment modeling traffic spikes using Python, Flask, FastAPI, and Deep Q-Network. Implemented Double DQN with Dueling architecture and Prioritized Experience Replay for adaptive request routing, achieving 25% lower response time."
              ghLink="https://github.com/Ranveer46/RL-Load-Balancer"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
