import React from "react";
import { Row, Col, Button } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="aboutbg" id="about">
          <div className="container">
            <Row>
              <Col lg={6} md={4}></Col>
              <Col lg={6} md={8}>
                <div className="about-desc">
                  <h2>Antlia</h2>
                  <p>
                    ANTLIA Protocol presents a solution for Blockchain
                    Interoperability, Scalability and Oracles. It is a truly
                    Decentralized Interoperable Blockchain Protocol for
                    connectivity, exchange of data/assets and communication. It
                    provides a Blockchain-to-Blockchain (Bc2Bc) solution. ANTLIA
                    Protocol presents a solution for Blockchain
                    Interoperability, Scalability and Oracles.
                  </p>
                  <Button className="linkbtn">Contact</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
