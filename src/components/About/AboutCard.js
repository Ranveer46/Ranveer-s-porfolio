import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ranveer Pensalwar</span> from{" "}
            <span className="purple">Pune, India.</span>
            <br />
            I am a final-year B.Tech student in Information Technology at Vishwakarma Institute of Information Technology,
            with strong expertise in <b>Full-Stack Development, Machine Learning, and Generative AI systems.</b>
            <br />
            <br />

            I enjoy transforming complex problems into scalable, impactful products.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Data Structures & Algorithm problems (500+ solved)
            </li>
            <li className="about-activity">
              <ImPointRight /> Building AI-driven full-stack applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Research Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring emerging technologies & startup ideas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build products that solve real-world problems at scale."
          </p>
          <footer className="blockquote-footer">Ranveer</footer>



        </blockquote>
      </Card.Body>
    </Card >
  );
}

export default AboutCard;
