import React from "react";
import { Row, Col, Button } from "reactstrap";
import block from '../../assets/MainBanner/blocksimg.svg'

class MainBanner extends React.Component {
  render() {
    return (
      <div>
        <div className="mainbanner">
          <div className="container">
            <Row>
              <Col lg={6} md={12}>
                <div className="banner-content">
                  <h1>Beyond Interchains &amp; Oracles</h1>
                  <p>
                    An Interoperable &amp; Scalable Blockchain for cross-chain
                    data and assets sharing.
                  </p>
                  <Button className="demobtn isDisabled">Demo</Button>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="banner-image">
                  <img src={block} alt="Block"/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBanner;
