import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
    const isInProgress = props.ghLink === "#";

    return (
        <Card className="project-card-view">
            <Card.Img
                variant="top"
                src={props.imgPath}
                alt="project image"
                className="card-img-top"
            />

            <Card.Body className="card-body-flex">
                <div className="card-content">
                    <Card.Title className="project-card-title">{props.title}</Card.Title>

                    <Card.Text className="project-card-text">
                        {props.description}
                    </Card.Text>

                    {/* Always render the div so the height remains constant even if empty */}
                    <div className="project-card-skills">
                        {props.skills && props.skills.map((skill, idx) => (
                            <span key={idx} className="skill-badge">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="card-buttons">
                    {isInProgress ? (
                        <Button variant="secondary" disabled>In Progress</Button>
                    ) : props.ghLink ? (
                        <Button variant="primary" href={props.ghLink} target="_blank">
                            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
                        </Button>
                    ) : null}

                    {props.demoLink && (
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

export default ProjectCard;