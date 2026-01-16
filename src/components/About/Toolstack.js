import React from "react";
import { Col, Row } from "react-bootstrap";
import AzureDevOps from "../../Assets/TechIcons/azure-devops.svg";
import Tableau from "../../Assets/TechIcons/tableau.svg";
import UiPath from "../../Assets/TechIcons/uipath.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Canva from "../../Assets/TechIcons/canva.svg";
import Figma from "../../Assets/TechIcons/figma.svg";
import ChatGPT from "../../Assets/TechIcons/chatgpt.svg";
import VSCode from "../../Assets/TechIcons/vscode.svg";
import VisualStudio from "../../Assets/TechIcons/visual-studio-icon-2022.svg";
import PyCharm from "../../Assets/TechIcons/pycharm.svg";

import Chrome from "../../Assets/TechIcons/Google Chrome.svg";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            

            <Col xs={4} md={2} className="tech-icons">
                <img src={AzureDevOps} alt="Azure DevOps" className="tech-icon-images " />
                <div className="tech-icons-text">Azure DevOps</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Tableau} alt="Tableau" className="tech-icon-images" />
                <div className="tech-icons-text">Tableau</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={UiPath} alt="UiPath" className="tech-icon-images " />
                <div className="tech-icons-text">UiPath</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Git} alt="Git" className="tech-icon-images" />
                <div className="tech-icons-text">GitHub</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Canva} alt="Canva" className="tech-icon-images " />
                <div className="tech-icons-text">Canva</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={Figma} alt="Figma" className="tech-icon-images " />
                <div className="tech-icons-text">Figma</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={ChatGPT} alt="ChatGPT" className="tech-icon-images " />
                <div className="tech-icons-text">ChatGPT</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={VSCode} alt="VS Code" className="tech-icon-images" />
                <div className="tech-icons-text">VS Code</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={VisualStudio} alt="Visual Studio" className="tech-icon-images" />
                <div className="tech-icons-text">Visual Studio 2022</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={PyCharm} alt="PyCharm" className="tech-icon-images" />
                <div className="tech-icons-text">PyCharm</div>
            </Col>


            <Col xs={4} md={2} className="tech-icons">
                <img src={Chrome} alt="Google Chrome" className="tech-icon-images" />
                <div className="tech-icons-text">Chrome</div>
            </Col>
        </Row>
    );
}

export default Toolstack;
