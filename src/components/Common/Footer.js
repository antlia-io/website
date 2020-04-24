import React from "react";
import { Link } from "react-router-dom";
import {Row, Col} from 'reactstrap';
import { animateScroll as scroll, Link as NavLink } from "react-scroll";
import logo from '../../assets/logo/color.svg'

class Footer extends React.Component {
  render() {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    return (
      <div>
        <section>
          {/* Footer section */}
          <div id="footer">
            <div className="container">
            <Row>
              <Col lg={3} md={3} sm={12}>
                <div className="copyright">
                  <img src={logo} alt="Antlia"/>
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
                    <li><Link to="" className="isDisabled">Careers</Link></li>
                    <li><Link to="" className="isDisabled">Privacy Policy</Link></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={3} sm={4}>
              <div className="footer-item">
                  <h6>Follow Us</h6>
                  <ul>
                    <li><a href="https://www.facebook.com/AntliaOfficial/" target="_blank" rel="noopener noreferrer" className="">Facebook</a></li>
                    <li><a href="https://twitter.com/antlia_chain" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.reddit.com/user/AntliaProtocol" target="_blank" rel="noopener noreferrer">Reddit</a></li>
                    <li><a href="https://www.linkedin.com/company/antliaofficial" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https://github.com/antlia-io " target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://t.me/Antlia_Official" target="_blank" rel="noopener noreferrer">Telegram</a></li>
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
