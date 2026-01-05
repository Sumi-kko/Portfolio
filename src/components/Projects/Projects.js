import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import cpf from "../../Assets/Projects/cpf.png"
import employee from "../../Assets/Projects/employee.png"
import ntuc from "../../Assets/Projects/ntuc.png"
import budgetly from "../../Assets/Projects/budgetly.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={budgetly}
                          isBlog={false}
                          title="Budgetly — Personal Finance Web App"
                          description="Developed budgeting features to track spending, saving, and category breakdowns. Designed a gamified leaderboard to boost engagement and financial discipline."
                          ghLink="#"  // In Progress
                      />
                  </Col>

                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={cpf}
                          isBlog={false}
                          title="Analysis of Financial Independence Barriers for Youths"
                          description="Analysed CPF contributions’ impact on young adults’ savings and financial independence. Cleaned and visualised CPF data in Tableau dashboards showing trends and risks."
                          demoLink="https://public.tableau.com/app/profile/chenyu.liao3079/viz/HowCPFContributionscauseFinancialFragilityAmongSIngaporeanYouths/Story1" // in progress
                      />
                  </Col>

                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={employee}
                          isBlog={false}
                          title="DSA Employee Management"
                          description="Built a Python system to store, validate, and organise employee records efficiently. Applied data structures to improve sorting and retrieval, reducing manual tracking."
                          ghLink="https://github.com/Sumi-kko/EmployeeManagementSystem"
                      />
                  </Col>

                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={ntuc}
                          isBlog={false}
                          title="NTUC App Development"
                          description="Developed the NTUC website with cover page, navigation, footer, and chatbot integration. Managed CSS styling and overall design as team leader."
                          ghLink="https://github.com/Sumi-kko/NTUC_website"
                      />
                  </Col>
       </Row>
      </Container>
    </Container>
  );
}

export default Projects;
