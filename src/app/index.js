
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
// import WOW from 'wowjs';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../components/Common/history';
import LandingPage from './LandingPage/LandingPage';
import {IntlProvider} from "react-intl";
import PropTypes from "prop-types";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/index.css';
import '../styles/css/bootstrap.min.css';
import '../styles/css/animate.css';
import '../styles/css/imagehover.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
// import 'react-phone-input-2/dist/style.css';
import 'video-react/dist/video-react.css';
import 'react-accessible-accordion/dist/fancy-example.css';
// import CourseRegister from '../components/CourseRegister';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'loaders.css';
// import BlockchainCourseDetails from '../components/BlockchainCourseDetails/BlockchainCourseDetails';
// import ManagementCourseDetails from '../components/ManagementCourseDetails/ManagementCourseDetails';

// import { checkPropTypes } from 'prop-types';
// import { connect } from 'tls';
import { connect } from "react-redux";
import messages from "./messages"

class App extends React.Component {
  // componentDidMount(){
  //   const wow = new WOW.WOW();
  //   wow.init();
  // }
  render(){
    const {lang} = this.props;
    return (
      // browserRouter is routing library
      <IntlProvider locale={lang} messages={messages[lang]}>
      <Router history={history}>
        <React.Fragment>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            {/* <Route path="/courseregister" exact component={CourseRegister} />
            <Route path="/blockchaincoursedetails" exact component={BlockchainCourseDetails} />
            <Route path="/managementcoursedetails" exact component={ManagementCourseDetails} /> */}
          </Switch>
          </React.Fragment>
      </Router>
      </IntlProvider>
    );
  }
 
};
App.propTypes = {
  lang: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
};

export default connect(mapStateToProps)(App);
