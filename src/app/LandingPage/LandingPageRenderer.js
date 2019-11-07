import React, { PureComponent } from "react";
// import AcademyFooter from "../../components/Common/AcademyFooter";
import { Element } from 'react-scroll'
import MainBanner from "../../components/MainBanner/MainBanner";
import MainNavbar from "../../components/Common/MainNavbar";
import Footer from "../../components/Common/Footer";
import About from "../../components/About/About";
import AntliaSolutions from "../../components/AntliaSolutions/AntliaSolutions";
import NewsLetter from "../../components/NewsLetter/index";
import ContactUs from "../../components/ContactUs/index";


 
class LandingPageRenderer extends PureComponent {
  render() {
    return (
      <div>
          <MainNavbar/>
          <MainBanner/>
          {/* <GetRecommendation/> */}
         <Element className="aboutscroll">
           <About/>
          </Element>
         <Element className="solutionscroll">
            <AntliaSolutions/>
          </Element>
          <NewsLetter/>
          <Element className="contactscroll">
            <ContactUs/>
          </Element>
           {/*  <Element className="focusareasscroll">
            <FocusArea/>
          </Element>
          <Element className="whatweofferscroll">
            <WhatWeOffer/>
          </Element>
          <Element className="whatyougetscroll">
            <WhatYouGet/>
          </Element> 
          <Element className="raitlearnprogramscroll">
            <RAITLearnProgram/>
          </Element> */}
          {/* <Element className="clientscroll">
            <RegistrationProcess/>
          </Element> */}
          {/* <Element className="academyfooterscroll">
            <AcademyDetailsFooter/>
          </Element>*/}
          <Footer/>  
      </div>
    );
  }
}


export default LandingPageRenderer;
