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
                    ANTLIA is interoperable, Scalable Blockchain for decentralised finance. It is a truly Decentralized Interoperable Blockchain Protocol for exchange of assets and data. Transactions fees are lower than existing Fiat solutions. Transaction settlement time is less than 1 seconds. Antlia trusted smart contract based on web assembly provide liberty of language restriction to write smart contracts secure and scalable.
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
