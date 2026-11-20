import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md={4} className="footer-copywright">
          <h3>Designed &amp; Built by <strong style={{ color: "var(--cyan)" }}>Ranveer Pensalwar</strong></h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>Copyright © {year} · All Rights Reserved</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons" style={{ display: "flex", justifyContent: "center", listStyle: "none", gap: "16px", padding: 0, margin: 0 }}>
            {[
              { href: "https://github.com/Ranveer46", icon: <AiFillGithub size={19} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/ranveer-pensalwar-b59b4a25b", icon: <FaLinkedinIn size={19} />, label: "LinkedIn" },
              { href: "mailto:pensalwarranveer1@gmail.com", icon: <MdEmail size={19} />, label: "Email" },
            ].map(({ href, icon, label }, i) => (
              <li key={i}>
                <a
                  href={href}
                  title={label}
                  style={{ color: "var(--text-muted)", display: "flex", alignItems: "center", transition: "all 0.3s" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--cyan)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
