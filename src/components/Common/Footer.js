import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import { animateScroll as scroll, Link as NavLink } from "react-scroll";
import logo from '../../assets/logo/color.svg'

const text1 = "ANTLIA is interoperable, Scalable Blockchain for decentralised finance."
const text2 = "ANTLIA is interoperable, Scalable Blockchain for decentralised finance. It is a truly Decentralized Interoperable Blockchain Protocol for exchange of assets and data. Transactions fees are lower than existing Fiat solutions. Transaction settlement time is less than 1 seconds. Antlia trusted smart contract based on web assembly provide liberty of language restriction to write smart contracts secure and scalable."

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noitems: false,
      show: false
    };
  }

  changeShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    const {show} = this.state

    return (
      <div>
        <section>
          {/* Footer section */}
          <div id="footer">
            <div className="container">
              <Row>
                <Col lg={12}>
                  <div className="extra-content">
                    {
                      show ? <span>{text2}</span> : <span>{text1}</span>
                    }
                    <button className="showBtn" onClick={this.changeShow}>{show ? 'Show Less' : 'Show More'}</button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={3} sm={12}>
                  <div className="copyright">
                    <img src={logo} alt="Antlia" />
                    <p>&copy; Copyright www.antlia.io
                    All Rights Reserved.
                  Powered by <a href="https://www.rnssol.com/" target="_blank" rel="noopener noreferrer">RNS Solutions</a></p>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                  <div className="footer-item">
                    <h6>Navigation</h6>
                    <ul>
                      <li><NavLink to="aboutscroll" spy={true} smooth={true} duration={500}>About Us</NavLink></li>
                      <li><NavLink to="contactscroll" spy={true} smooth={true} duration={500}>Contact Us</NavLink></li>
                      <li><a href="/" className="isDisabled">Careers</a></li>
                      <li><Link to="/" className="isDisabled">Privacy Policy</Link></li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                  <div className="footer-item">
                    <h6>Follow Us</h6>
                    <ul>
                      <li><a href="/" className="isDisabled">Facebook</a></li>
                      <li><a href="/" className="isDisabled">Twitter</a></li>
                      <li><a href="/" className="isDisabled">YouTube</a></li>
                      <li><a href="/" className="isDisabled">Linkedin</a></li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                  <div className="footer-item">
                    <h6>News Feeds</h6>
                    <ul>
                      <li><a href="https://www.rnssol.com/" target="_blank" rel="noopener noreferrer">RNS Solutions</a></li>
                      <li><a href="https://raiet.rnssol.com/" target="_blank" rel="noopener noreferrer">RAIET</a></li>
                      <li><a href="https://medium.com/@rnssol" target="_blank" rel="noopener noreferrer">Blogs</a></li>

                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="gotop vert-move">
                <Link to="/" onClick={scrollToTop}><i className="fa fa-arrow-up"></i></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
