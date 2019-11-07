import React from "react";
import { Row, Col, Button, Form, FormGroup, Input } from "reactstrap";
import Loader from "react-loaders";
import { toast } from 'react-toastify';

class NewsLetter extends React.Component {
  state = {
    email: "",
    errors: {},
    touched: {
      emailError: false,
    }
  }
  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    this.setState({
      touched: { ...this.state.touched, [event.target.name]: true }
    });
  };
  onBlurHandler = event => {
    this.setState({
      touched: { ...this.state.touched, [event.target.name]: true }
    });
  }
  submitForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      this.setState({
        email: "",
      });
    }, 3000);
    this.props.userNewsLetterHandler(this.state.email)
    setTimeout(() => {
      this.setState({
        email: "",
        touched: {
          emailError: false,
        },
        errors: {},
      });
    }, 3000);
    // toast
    toast.success("News Letter Submitted Successfully")
  }
  render() {
    const { email} = this.state;
    const { newsLetterLoading } = this.props;
    return (
      <div>
        <div className="newsletterbg" id="newsletter">
          <div className="container">
            <Row>
              <Col lg={2} md={1}></Col>
              <Col lg={8} md={10}>
                <div className="news-desc">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                  <h2>Sign up for our Newsletter</h2>
                  <p>Stay tuned for the latest update from the ANTLIA NETWORK. </p>
                  <Form>
                      <FormGroup>
                          <Input type="email" name="email" placeholder="Email Address"
                          onClick={this.onClickHandler}
                                onChange={this.onChangeHandler}
                              />

                              {/* {this.state.touched.email && (
                                <span className="spanText text-center" >{errors.email && errors.email[0]}</span>
                              )} */}
                          <Button className="newsbtn"
                           onClick={this.submitForm}
                           disabled={
                             email === ""
                           }
                           type="submit"> 
                            {newsLetterLoading ? (
                                <Loader
                                  type="ball-beat"
                                  active={newsLetterLoading}
                                />
                              ) : (
                                  'Contact'
                                )}
                            </Button>
                      </FormGroup>
                  </Form>
                
                </div>
              </Col>
              <Col lg={2} md={1}></Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsLetter;
