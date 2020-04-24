import React from "react";
import { Row, Col } from "reactstrap";
import interoperability from '../../assets/antliasolutions/interoperability solution.svg';
import scalability from '../../assets/antliasolutions/software scalability.svg';
import oracles from '../../assets/antliasolutions/oracle blockchain.svg';
import solutions from '../../assets/antliasolutions/solutions.svg';

class AntliaSolutions extends React.Component {
  render() {
    return (
      <div>
        <div className="solutionsbg" id="solutions">
          <div className="container">
            <Row>
              <Col lg={6} md={12}>
                <div className="solutions-desc">
                  <h2>Antlia Solving Blockchain Challenges</h2>
                  <div className="system-item">
                    <div className="icon">
                      <img src={interoperability} alt="blockchain data interoperability" />
                    </div>
                    <div className="content">
                      <h4>Interoperability:</h4>
                      <p>
                        Interoperabe blockchain leveraging principles of Inter
                        Blockchain Communication (IBC)
                      </p>
                    </div>
                  </div>
                  <div className="system-item">
                    <div className="icon">
                      <img src={scalability} alt="antlia scalability solution" />
                    </div>
                    <div className="content">
                    <h4>Scalability:</h4>
                    <p>
                      Enhanced Blockchain scalability through layer 1 and State
                      Machine Sharding.{" "}
                    </p>
                    </div>
                  </div>
                  <div className="system-item">
                    <div className="icon">
                      <img src={oracles} alt="centralized and decentralized data exchange" />
                    </div>
                    <div className="content">
                    <h4>Oracles:</h4>
                    <p>
                      Fault-tolerant Oracles for Blockchain to digital
                      infrastructure communications{" "}
                    </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} className="sol-hide">
                <div className="solutions-img">
                  <img src={solutions} alt="Soltions" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="solutionsbgimg">
          <div className="container">
            <Row>
         
              <Col lg={12} md={12}>
                <div className="solutions-img">
                  <img src={solutions} alt="Soltions" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default AntliaSolutions;
