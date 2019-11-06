import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Linkedin from "../../assets/socialicons/Linkedin.png";
import facebook from "../../assets/socialicons/facebook.png";
import twitter from "../../assets/socialicons/twitter.png";
import medium from "../../assets/socialicons/medium.png";
import youtube from "../../assets/socialicons/youtube.png";
import reddit from "../../assets/socialicons/reddit.png";
import github from "../../assets/socialicons/github.png";

class Footer extends React.Component {
  render() {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    return (
      <div>
        <section>
          {/* Footer section */}
          <div className="footer">
            <div className="container">
              <div className="footer-container">
                <div className="footer-left">
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="https://www.rnssol.com" target="_blank" rel="noopener noreferrer">
                          RNS Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://rait.rnssol.com/" target="_blank" rel="noopener noreferrer">
                          RAIET
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://medium.com/@rnssol"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Blogs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right-reserved">
                    <p>
                      © 2019 Antlia. All Rights Reserved | Powered by
                      RNS Solutions
                    </p>
                  </div>
                </div>
                <div className="footer-right">
                  <div className="footer-social-link">
                    <div className="social-circle">
                      <a
                        href="https://www.facebook.com/rnssol/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="facebook iconbg">
                          <img
                            src={facebook}
                            className="socialicon"
                            alt="Linkedin"
                          />
                        </div>
                      </a>
                      <a
                        href="https://twitter.com/rnssol"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="twitter iconbg">
                          <img
                            src={twitter}
                            className="socialicon"
                            alt="Linkedin"
                          />
                        </div>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/rnssol/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="linkedin iconbg">
                          <img
                            src={Linkedin}
                            className="socialicon"
                            alt="Linkedin"
                          />
                        </div>
                      </a>
                      <a
                        href="https://www.youtube.com/c/RNSSolutions"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="youtube iconbg">
                          <img
                            src={youtube}
                            className="socialicon"
                            alt="Linkedin"
                          />
                        </div>
                      </a>
                      <a
                        href="https://medium.com/@rnssol"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="medium iconbg">
                          <img
                            src={medium}
                            className="socialicon"
                            alt="Linkedin"
                          />
                        </div>
                      </a>
                      <a
                        href="https://www.reddit.com/user/rnssol"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="reddit iconbg">
                          <img
                            src={reddit}
                            className="socialicon"
                            alt="Linkedin"
                          />
                        </div>
                      </a>
                      <a
                        href="https://github.com/RNSSolution"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="github iconbg">
                          <img
                            src={github}
                            className="socialicon"
                            alt="Linkedin"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
