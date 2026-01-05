import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    const isInProgress = props.ghLink === "#";

    return (
        <Card className="project-card-view" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {/* Image fixed height and aspect ratio */}
            <Card.Img
                variant="top"
                src={props.imgPath}
                alt="card-img"
                style={{ height: "200px", objectFit: "cover" }}
            />

            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                <div>
                    <Card.Title style={{ color: "#8dc0f0", fontWeight: "bold" }}>{props.title}</Card.Title>
                    <Card.Text style={{ textAlign: "justify", fontSize: "0.9rem" }}>
                        {props.description}
                    </Card.Text>
                </div>

                <div style={{ marginTop: "auto", paddingTop: "15px" }}>
                    {/* GitHub or In Progress button */}
                    {isInProgress ? (
                        <Button variant="secondary" disabled>
                            In Progress
                        </Button>
                    ) : props.ghLink ? (
                        <Button variant="primary" href={props.ghLink} target="_blank">
                            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
                        </Button>
                    ) : null}

                    {/* Demo button */}
                    {!props.isBlog && props.demoLink && (
                        <Button
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            style={{ marginLeft: "10px" }}
                        >
                            <CgWebsite /> &nbsp; Demo
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;