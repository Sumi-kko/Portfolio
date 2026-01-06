import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import cpf from "../../Assets/Projects/cpf.png"
import employee from "../../Assets/Projects/employee.png"
import ntuc from "../../Assets/Projects/ntuc.png"
import budgetly from "../../Assets/Projects/budgetly.png"
import ocr from "../../Assets/Projects/ocrbot.png"

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
                          title="Budgetly - Personal Finance Web App"
                          description="Developed the budgeting page to manage envelopes, track spending, and monitor saving goals. Designed a gamified leaderboard to increase engagement. Collaborated with the team to deliver an intuitive, user-friendly interface with interactive dashboards."
                          skills={["ASP.NET"]}
                          ghLink="#"
                      />
                  </Col>

                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={ocr}
                          title="UiPath Invoice Automation Bot (OCR → Excel)"
                          description="Developed a UiPath automation bot to extract invoice data (vendor, invoice number, date, totals) from PDFs using OCR. Processed and exported structured Excel reports, reducing manual data entry and improving workflow efficiency."
                          skills={["UiPath"]}
                          ghLink="https://github.com/Sumi-kko/UIPath_OCR_Bot/"
                      />
                  </Col>

                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={cpf}
                          title="Analysis of Financial Independence Barriers for Youths"
                          description="Led the CPF sector analysis and integrated the entire Tableau dashboard for the team. Analysed CPF data to identify trends and risks impacting young adults' financial independence, producing actionable insights."
                          skills={["Tableau", "Data Analysis", "Excel"]}
                          demoLink="https://public.tableau.com/app/profile/chenyu.liao3079/viz/HowCPFContributionscauseFinancialFragilityAmongSIngaporeanYouths/Story1"
                      />
                  </Col>

                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={employee}
                          title="DSA Employee Management System"
                          description="Built a Python system to store, validate, and organise employee training records. Applied data structures to improve sorting and retrieval efficiency, reducing manual tracking."
                          skills={["Python"]}
                          ghLink="https://github.com/Sumi-kko/EmployeeManagementSystem"
                      />
                  </Col>

                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={ntuc}
                          title="NTUC Website Development"
                          description="Led the development of the NTUC website, including homepage, navigation, footer, and chatbot integration. Designed prototypes, implemented CSS styling, and ensured a polished, user-friendly final site."
                          skills={["HTML", "CSS", "JavaScript", "Bootstrap", "UI/UX Design"]}
                          ghLink="https://github.com/Sumi-kko/NTUC_website"
                      />
                  </Col>


       </Row>
      </Container>
    </Container>
  );
}

export default Projects;
