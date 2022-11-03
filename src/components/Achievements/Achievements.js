import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import miniature  from "../../Assets/award/minature.jpeg";
import certificate  from "../../Assets/award/certificate.jpeg";
import all  from "../../Assets/award/all.jpeg";

function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong> and <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
         My achievements are given below 🏅.
        </p>
        <h1>
        <span>Extra Curricular</span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">Ms Social</h2>
              <img src={miniature} alt=""/>
              <div class="card-desc">
              <p >I got first place in online events conducted by KKC club [ kalam Knowledge club in CIT] for this minature furnitures. These miniatures are done by me using the  things available from my house  </p>
              <img src={certificate}/>
              </div>
              
            </div>
          </Col>
         
        </Row>
        <h1>
        <br/>
        <span>Co-Curricular</span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="cards">
              <div class="card-achievement">
              <h2 class="card-title">Certificates</h2>
              <img src={all} alt=""/>
              <div class="card-desc">
              <p >I have completed html, php and python courses from solo learn and participated in qiskit hackathon, and completed soft skills course from TCS ion  </p>
              
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
