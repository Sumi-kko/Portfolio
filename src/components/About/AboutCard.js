import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi! I’m <span className="purple">Liao Chenyu</span>, a{" "}
                        <span className="purple">
                            Business & Financial Technology Year 2 student
                        </span>{" "}
                        at <span className="purple">Nanyang Polytechnic</span>.
                        <br />
                        <br />
                        I have a strong interest in{" "}
                        <span className="purple">AI and Data Analytics</span>, and I’m still
                        finding where I fit best within the tech space as I continue learning
                        and building hands-on projects.
                        <br />
                        <br />
                        I’ve worked with{" "}
                        <b className="purple">
                            Python, HTML, CSS, ASP.NET, Tableau
                        </b>{" "}
                        and enjoy using{" "}
                        <b className="purple">Canva and AI-assisted design tools</b> to
                        support UX-focused work and presentations.
                        <br />
                        <br />
                        Outside of school and tech, I enjoy:
                    </p>

                    <ul>
                        <li className="about-activity">
                            Gardening 🌱
                        </li>
                        <li className="about-activity">
                             Gaming 🎮
                        </li>
                        <li className="about-activity">
                            Oceans 🌊
                        </li>
                    </ul>
                    {/*
                    <p style={{ color: "rgb(155 126 172)" }}>
                        “Learning as I go, one project at a time.”
                    </p>

                    <footer className="blockquote-footer">Chenyu</footer>*/ }
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;