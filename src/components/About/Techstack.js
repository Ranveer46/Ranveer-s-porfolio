import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiFlask,
  SiFastapi,
  SiDocker,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <div className="tech-icons-text">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <div className="tech-icons-text">FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <div className="tech-icons-text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div className="tech-icons-text">Docker</div>
      </Col>
    </Row>
  );
}

export default Techstack;
