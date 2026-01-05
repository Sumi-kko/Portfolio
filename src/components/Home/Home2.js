import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home2.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I’m a Business & Financial Technology student with a strong interest in
                            <b className="purple"> AI </b>
                            and
                            <b className="purple"> data analytics</b>. I enjoy learning how data can be
                            used to support better decisions and uncover meaningful insights.
                            <br />
                            <br />
                            I have experience working with
                            <i>
                                <b className="purple">
                                    {" "}
                                    Python, SQL, HTML/CSS/JavaScript,{" "}
                                </b>
                            </i>
                            as well as
                            <b className="purple"> ASP.NET </b>
                            and data visualisation tools such as
                            <b className="purple"> Tableau</b>.
                            <br />
                            <br />
                            I’m particularly interested in building
                            <i>
                                <b className="purple">
                                    {" "}
                                    data-driven applications, analytical dashboards,{" "}
                                </b>
                            </i>
                            and using AI-assisted tools to make complex information easier to understand.
                            <br />
                            <br />
                            I also care about
                            <b className="purple"> user experience </b>
                            and enjoy exploring basic UX and visual design using tools like
                            <b className="purple"> Canva</b>, along with
                            <b className="purple"> AI-assisted tools </b>
                            to improve clarity and usability.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <img src={myImg} className="img-fluid" alt="avatar" />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Sumi-kko"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/chenyu-l-50b93b2b9/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;