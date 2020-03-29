import React from "react";
import { Card } from "react-bootstrap";

function PortfolioCard({ image, title, summary, link }) {
    return (
        <Card style={{ width: "18rem", marginTop: "10%" }}>
            <Card.Img variant="top" src={image} style={{ width: "100%", height: "16rem" }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ height: "5rem"}}>
                    <p>{summary}</p>
                </Card.Text>
                <a className="btn btn-primary" href={link}>
                    Go
                </a>
            </Card.Body>
        </Card>
    );
}

export default PortfolioCard;
