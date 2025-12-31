import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AchievementCard from "./AchievementCard";
import aitHackathon from "../../Assets/Projects/ait.png";
import iitHackathon from "../../Assets/Projects/iit.png";
import mmitProject from "../../Assets/Projects/mmit.png";
import startupSaga from "../../Assets/Projects/starupsaga.png";
import sih from "../../Assets/Projects/sih.png";

function Achievements() {
    const achievements = [
        {
            title: "Winner - Smart India Hackathon 2025",
            description: "Won the Smart India Hackathon 2025 for developing an innovative solution.",
            date: "2025",
            imgPath: sih,
        },
        {
            title: "1st Place - HackMatrix (IIT Patna)",
            description: "Secured 1st position at HackMatrix organized by IIT Patna.",
            date: "2025",
            imgPath: iitHackathon,
        },
        {
            title: "2nd Place - Project Presentation @ MMIT Pune",
            description: "Awarded 2nd place for project presentation at MMIT Pune.",
            date: "2025",
            imgPath: mmitProject,
        },
        {
            title: "2nd Place - AIT Pune Hackathon",
            description: "Secured runner-up position at AIT Pune Hackathon.",
            date: "2025",
            imgPath: aitHackathon,
        },
        {
            title: "Winner - Startup Saga",
            description: "Won Best Pitch & Mock Funding at Startup Saga.",
            date: "2025",
            imgPath: startupSaga,
        },

    ];

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Achievements </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are some of my recent achievements and recognitions.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {achievements.map((ach, index) => (
                        <Col md={4} className="project-card" key={index}>
                            <AchievementCard
                                title={ach.title}
                                description={ach.description}
                                date={ach.date}
                                imgPath={ach.imgPath}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Achievements;
