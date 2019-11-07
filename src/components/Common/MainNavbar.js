import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/color.svg";
// import { FormattedMessage } from "react-intl";
import logo1 from "../../assets/logo/color.svg";
import { Link as NavLink } from "react-scroll";

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleClose = () => {
    this.setState({
      isOpen: false
    });
  };
  componentDidMount() {
    let nav = document.getElementById("navbar");
    nav.classList.add("transparent-nav");

    // nav[0].style.background = 'transparent';
    // nav[0].style.position = 'absolute';
    // nav[0].style.boxShadow = 'none';
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    let nav = document.getElementById("navbar");
    // nav.classList.remove("transparent-nav");
    nav.classList.remove("sticky-nav");
  }
  handleScroll() {
    let top = document.body.getBoundingClientRect().top * -1;
    let nav = document.getElementById("navbar");
    if (top > 0) {
      // nav.classList.remove("transparent-nav");
      nav.classList.add("bgcolornav");
    } else {
      nav.classList.add("transparent-nav");
      // nav.classList.remove("bgcolornav");
    }
  }

  render() {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    return (
      <div className="menubar">
        <div className="transparedNav">
          <Navbar id="navbar" light expand="md">
            <div className="container">
              <NavbarBrand tag={Link} to={"/"} onClick={scrollToTop}>
                <img src={logo} alt="RNS logo" className="logodes" />
                <img src={logo1} alt="RNS logo" className="logores" />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto nav-links navbarresBg" navbar>
               
                  <NavItem className="nav-item1">
                    <NavLink
                      to="/"
                    //   onClick={scrollToTop, () => {
                    //   this.toggleClose();
                    // }}
                      onClick={scrollToTop}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item1">
                    <NavLink
                      to="aboutscroll"
                      onClick={() => {
                        this.toggleClose();
                      }}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item1">
                    <NavLink
                      to="solutionscroll"
                      onClick={() => {
                        this.toggleClose();
                      }}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                     Solutions
                    </NavLink>
                  </NavItem>
                  {/* <NavItem className="nav-item1">
                    <NavLink
                      to="ecosystemscroll"
                      onClick={() => {
                        this.toggleClose();
                      }}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Ecosystem
                    </NavLink>
                  </NavItem> */}
                  <NavItem className="nav-item1">
                    <NavLink
                      to="/"
                      onClick={() => {
                        this.toggleClose();
                      }}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="isDisabled"
                    >
                      Explorer
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item1">
                    <NavLink
                      to="/"
                      onClick={() => {
                        this.toggleClose();
                      }}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="isDisabled"
                    >
                      Wallet
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item1">
                    <NavLink
                      to="/"
                      onClick={() => {
                        this.toggleClose();
                      }}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="isDisabled"
                    >
                      Faucet
                    </NavLink>
                  </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      LANG
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem><Link onClick={() => this.props.setLocale('en')}>English</Link></DropdownItem>
                      <DropdownItem><Link onClick={() => this.props.setLocale('ko')}>한국어</Link></DropdownItem>
                      <DropdownItem><Link onClick={() => this.props.setLocale('es')}>Español</Link></DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                  <NavItem className="nav-item1" id="contactbtn">
                    <NavLink  to="contactscroll"
                      onClick={() => {
                        this.toggleClose();
                      }}
                      spy={true}
                      smooth={true}
                      duration={500} className="contactbtn">
                      Contact
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default MainNavbar;
