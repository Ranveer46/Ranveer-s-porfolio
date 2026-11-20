import React from "react";
import { FiTerminal, FiAward, FiCpu, FiTrendingUp } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";

function HeroConsole() {
  return (
    <div className="hero-console-wrapper">
      {/* ── Main Glassmorphic Terminal Window ── */}
      <div className="hero-console-window">
        {/* Window Top Bar */}
        <div className="console-header">
          <div className="console-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-amber"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="console-tab">
            <FiTerminal size={14} style={{ color: "var(--cyan)" }} />
            <span>ranveer_agent.ts</span>
          </div>
          <div className="console-status">
            <span className="console-live-beacon"></span>
            <span>ONLINE</span>
          </div>
        </div>

        {/* Console Code Body */}
        <div className="console-body">
          <div className="code-line comment">
            <span className="line-num">01</span>
            <span>// Ranveer Pensalwar — Agentic AI & Full-Stack Architect</span>
          </div>
          <div className="code-line">
            <span className="line-num">02</span>
            <span className="keyword">const</span> <span className="entity">developer</span> = <span className="keyword">new</span> <span className="class-name">AIArchitect</span>({"{"}
          </div>
          <div className="code-line indent">
            <span className="line-num">03</span>
            <span className="prop">specialization</span>: <span className="string">"Agentic AI & Scalable Backends"</span>,
          </div>
          <div className="code-line indent">
            <span className="line-num">04</span>
            <span className="prop">achievements</span>: [<span className="string">"7x Hackathon Winner"</span>, <span className="string">"SIH '25 Champion"</span>],
          </div>
          <div className="code-line indent">
            <span className="line-num">05</span>
            <span className="prop">industry</span>: <span className="string">"Turning Point (Canada)"</span>,
          </div>
          <div className="code-line indent">
            <span className="line-num">06</span>
            <span className="prop">milestone</span>: <span className="string">"1,000+ Active Users @ Gradus"</span>,
          </div>
          <div className="code-line indent">
            <span className="line-num">07</span>
            <span className="prop">techStack</span>: [<span className="val-cyan">"Python"</span>, <span className="val-cyan">"Next.js"</span>, <span className="val-cyan">"Llama 3.3"</span>, <span className="val-cyan">"FastAPI"</span>]
          </div>
          <div className="code-line">
            <span className="line-num">08</span>
            {"});"}
          </div>
          <div className="code-line">
            <span className="line-num">09</span>
            <span className="keyword">await</span> developer.<span className="func">deployHighImpact</span>();
          </div>
          <div className="code-line output-line">
            <span className="line-num">10</span>
            <span className="output-tag">
              <BsCheckCircleFill size={13} style={{ color: "#34d399", marginRight: "6px" }} />
              STATUS: READY TO BUILD AT PRODUCTION SCALE
            </span>
            <span className="cursor-block">█</span>
          </div>
        </div>
      </div>

      {/* ── Floating Trending Badge 1 (Top Right) ── */}
      <div className="floating-bento-badge badge-trophy">
        <div className="badge-icon gold-glow">
          <FiAward size={18} />
        </div>
        <div className="badge-text">
          <span className="badge-title">7x Champion</span>
          <span className="badge-sub">SIH & National Wins</span>
        </div>
      </div>

      {/* ── Floating Trending Badge 2 (Bottom Left) ── */}
      <div className="floating-bento-badge badge-users">
        <div className="badge-icon emerald-glow">
          <FiTrendingUp size={18} />
        </div>
        <div className="badge-text">
          <span className="badge-title">1,000+ Users</span>
          <span className="badge-sub">Gradus AI Platform</span>
        </div>
      </div>

      {/* ── Floating Trending Badge 3 (Bottom Right) ── */}
      <div className="floating-bento-badge badge-industry">
        <div className="badge-icon cyan-glow">
          <FiCpu size={18} />
        </div>
        <div className="badge-text">
          <span className="badge-title">eventFlow AI</span>
          <span className="badge-sub">Solace Event Mesh (Canada)</span>
        </div>
      </div>
    </div>
  );
}

export default HeroConsole;
