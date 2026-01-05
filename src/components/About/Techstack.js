import React from "react";
import { Col, Row } from "react-bootstrap";

// Tech
import HTML from "../../Assets/TechIcons/html.svg";
import CSS from "../../Assets/TechIcons/css.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import AspNet from "../../Assets/TechIcons/asp.net.svg";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <img src={HTML} alt="HTML" className="tech-icon-images " />
                <div className="tech-icons-text">HTML</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={CSS} alt="CSS" className="tech-icon-images " />
                <div className="tech-icons-text">CSS</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Javascript} alt="JavaScript" className="tech-icon-images" />
                <div className="tech-icons-text">JavaScript</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Python} alt="Python" className="tech-icon-images" />
                <div className="tech-icons-text">Python</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQL} alt="SQL" className="tech-icon-images" />
                <div className="tech-icons-text">SQL</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={AspNet} alt="ASP.NET" className="tech-icon-images white-icon" />
                <div className="tech-icons-text">ASP.NET</div>
            </Col>
        </Row>
    );
}

export default Techstack;
