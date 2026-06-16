import React from "react";
import Card from "react-bootstrap/Card";

function AchievementCard({ title, description, date, imgPath }) {
    return (
        <Card className="project-card-view">
            {imgPath && <Card.Img variant="top" src={imgPath} alt="card-img" style={{ maxHeight: "200px", objectFit: "cover" }} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {description}
                </Card.Text>
                <Card.Footer className="text-muted">{date}</Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default AchievementCard;
