import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

// Cert images

import pythonAuto from "../../Assets/Certs/google-it-automation-python.svg";
import aiEssentials from "../../Assets/Certs/google-ai-essentials.svg";
import bi from "../../Assets/Certs/google-business-intelligence.svg";
import pm from "../../Assets/Certs/google-project-management.svg";
import prompting from "../../Assets/Certs/google-prompting-essentials.svg";
import aws from "../../Assets/Certs/aws-cloud-foundations.png";
import digitalMarketing from "../../Assets/Certs/google-digital-marketing.png";
import dataAnalytics from "../../Assets/Certs/google-data-analytics.png";
import webDev from "../../Assets/Certs/ibm-web-dev.png";
import cyber from "../../Assets/Certs/ibm-cybersecurity.png";

function Certs() {
    const certs = [
        {
           img: pythonAuto,
            name: "Google IT Automation with Python",
            issuer: "Google",
            date: "Oct 2025",
            credentialId: "3ERVC0TUO5P3",
            link: "https://www.coursera.org/account/accomplishments/specialization/3ERVC0TUO5P3",
        },
        {
          img: aiEssentials,
            name: "Google AI Essentials",
            issuer: "Google",
            date: "Sep 2025",
            credentialId: "3XK9AH6N6MSB",
            link: "https://www.coursera.org/account/accomplishments/specialization/3XK9AH6N6MSB",
        },
        {
          img: bi,
            name: "Google Business Intelligence",
            issuer: "Google",
            date: "Sep 2025",
            credentialId: "29BJZPTNJ7W7",
            link: "https://www.coursera.org/account/accomplishments/specialization/29BJZPTNJ7W7",
        },
        {
        img: pm,
            name: "Google Project Management",
            issuer: "Google",
            date: "Sep 2025",
            credentialId: "6TIX2GGKDPR1",
            link: "https://www.coursera.org/account/accomplishments/specialization/6TIX2GGKDPR1",
        },
        {
           img: prompting,
            name: "Google Prompting Essentials",
            issuer: "Google",
            date: "Sep 2025",
            credentialId: "6SH14RG241MD",
            link: "https://www.coursera.org/account/accomplishments/specialization/6SH14RG241MD",
        },
        {
          img: aws,
            name: "AWS Academy Cloud Foundations",
            issuer: "Amazon Web Services",
            date: "Jul 2025",
            credentialId: "",
            link: "https://www.credly.com/badges/d9c840c6-fc4f-49aa-8479-81b87c83259d/linked_in_profile",
        },
        {
           img: digitalMarketing,
            name: "Google Digital Marketing & E-Commerce",
            issuer: "Coursera",
            date: "Jul 2025",
            credentialId: "",
            link: "https://www.credly.com/badges/1d2fa8d1-47be-4681-80e6-8cba75c7b3c1/linked_in_profile",
        },
        {
          img: dataAnalytics,
            name: "Google Data Analytics",
            issuer: "Coursera",
            date: "Mar 2025",
            credentialId: "",
            link: "https://www.credly.com/badges/3a4cd4a2-c3bd-432b-9e23-850e66ad9969/linked_in_profile",
        },
        {
            img: webDev,
            name: "Web Development Fundamentals",
            issuer: "IBM",
            date: "Jul 2024",
            credentialId: "",
            link: "https://www.credly.com/badges/864374b2-2123-4cfc-9f06-3cf0265d548f/linked_in_profile",
        },
        {
            img: cyber,
            name: "Cybersecurity Fundamentals",
            issuer: "IBM",
            date: "Jun 2024",
            credentialId: "",
            link: "https://www.credly.com/badges/cf1717cc-b602-4573-9e36-c5146af993bf/linked_in_profile",
        },
    ];

    return (
        <Container fluid className="cert-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Certifications</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Verified professional and technical credentials.
                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {certs.map((cert, index) => (
                        <Col md={4} className="cert-card" key={index}>
                            <Card className="cert-card-view">
                                <Card.Img
                                    variant="top"
                                    src={cert.img}
                                    className="cert-img"
                                    alt={cert.name}
                                />
                                <Card.Body>
                                    <Card.Title>{cert.name}</Card.Title>

                                    <Card.Text className="cert-details">
                                        <span><strong>Issuer:</strong> {cert.issuer}</span><br />
                                        <span><strong>Issued:</strong> {cert.date}</span><br />
                                        {cert.credentialId && (
                                            <span>
                                                <strong>Credential ID:</strong> {cert.credentialId}
                                            </span>
                                        )}
                                    </Card.Text>

                                    <Button
                                        variant="primary"
                                        href={cert.link}
                                        target="_blank"
                                        className="cert-btn"
                                    >
                                        Show Credential
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default Certs;
