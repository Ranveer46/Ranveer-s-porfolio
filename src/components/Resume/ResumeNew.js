import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Projects/Ranveer Updated resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <div className="section-header">
            <p className="section-eyebrow">Verified Credentials</p>
            <h1 className="project-heading">
              Curriculum <strong className="purple">Vitae</strong>
            </h1>
            <p className="section-sub">Detailed breakdown of education, industry roles, and publications.</p>
            <div className="section-divider"></div>
          </div>

          <Row style={{ justifyContent: "center", marginBottom: "35px" }}>
            <a href={pdf} target="_blank" rel="noreferrer" className="resume-dl-btn">
              <AiOutlineDownload size={19} /> Download Resume (PDF)
            </a>
          </Row>

          <Row className="resume" style={{ justifyContent: "center" }}>
            <Document file={pdf} className="d-flex justify-content-center shadow-lg rounded">
              <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />
            </Document>
          </Row>

          <Row style={{ justifyContent: "center", marginTop: "35px" }}>
            <a href={pdf} target="_blank" rel="noreferrer" className="resume-dl-btn">
              <AiOutlineDownload size={19} /> Download Resume (PDF)
            </a>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
