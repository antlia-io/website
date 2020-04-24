import React from "react";
import { Row, Col, Form, FormGroup, Input, FormText, Button } from "reactstrap";
// import ReactPhoneInput from "react-phone-input-2";
// import ReactFlagsSelect from "react-flags-select";
import ReCAPTCHA from "react-google-recaptcha";
import location from "../../assets/socialicons/location.png";
import mail from "../../assets/socialicons/mail.png";
import phone1 from "../../assets/socialicons/phone.png";
// import Loader from "react-loaders";
import validate from "validate.js";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

var schema = {
  email: {
    email: {
      message: (
        <FormattedMessage
          id="contact.emailerror"
          defaultMessage="Email must be valid."
        />
      )
    }
  },
  name: {
    presence: true,
    length: {
      minimum: 1,
      message: (
        <FormattedMessage
          id="contact.nameerror"
          defaultMessage="Name must be filled."
        />
      )
    }
  },
  subject: {
    presence: true,
    length: {
      minimum: 1,
      message: (
        <FormattedMessage
          id="contact.subjecterror"
          defaultMessage="Subject must be filled."
        />
      )
    }
  },
  message: {
    presence: true,
    length: {
      minimum: 1,
      message: (
        <FormattedMessage
          id="contact.messageerror"
          defaultMessage="Message must be filled."
        />
      )
    }
  },
  phone: {
    presence: true,
    length: {
      minimum: 1,
      message: (
        <FormattedMessage
          id="contact.phoneerror"
          defaultMessage="Phone must be entered."
        />
      )
    }
  },
  country: {
    presence: true,
    length: {
      minimum: 1,
      message: (
        <FormattedMessage
          id="contact.countryerror"
          defaultMessage="Country must be selected."
        />
      )
    }
  },
  selectedCountry: {
    presence: true,
    length: {
      minimum: 1,
      message: (
        <FormattedMessage
          id="contact.countryerror"
          defaultMessage="Country must be selected."
        />
      )
    }
  }
};
class ContactUs extends React.Component {
  state = {
    code: "--",
    name: "",
    email: "",
    subject: "",
    message: "",
    country: "",
    phone: "",
    value: "",
    selectedCountry : '',
    touched: {
      email: false,
      name: false,
      subject: false,
      message: false,
      country: false,
      phone: false,
      // value: false,
      selectedCountry : false,
    },
    errors: {}
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.setState({
      touched: { ...this.state.touched, [event.target.name]: true }
    });
  };

  

  onPhoneHandler = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({ [event.target.name]: event.target.value })
    }
    this.setState({ touched: { ...this.state.touched, [event.target.name]: true } });
  }

  submitFormHandler = event => {
    event.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
      country: this.state.country,
      phonenumber: this.state.phone,
    };
    console.log('this is data', data)
    this.props.userContactHandler(data);
    setTimeout(() => {
      this.setState({
        name: "",
        email: "",
        subject: "",
        code :'--',
        message: "",
        selectedCountry: "",
        phone: "",
        value :'',
        countryCode :'',
        errors: {},
        touched: {
          email: false,
          name: false,
          subject: false,
          message: false,
          selectedCountry: false,
          phone: false,
          value: false,
          countryCode: false
        }
      });
    }, 3000);
  };
  onSelectFlag = event => {
    let x = event.target.value.split(',');
    this.setState({
      country: x[1],
      code: x[0],
      selectedCountry: event.target.value,
    });
  };

  onhandleBlur = event =>{
    this.setState({
      touched: { ...this.state.touched, selectedCountry: true }
    });
  }

  onCaptchaHandler = value => {
    this.setState({
      value: value
    });
  };

  pickcode(e) {
    this.setState({ code: "+" + e.target.value, Country: e.target.value });
  }
  render() {
    // const { contactUsLoading } = this.props;
    const { name, email, message, phone, subject, country, selectedCountry } = this.state;

    let errors = validate(
      {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
        phone: this.state.phone,
        country: this.state.country,
        // value: this.state.value,
        selectedCountry : selectedCountry
      },
      schema
    );
    errors = errors ? errors : {};

    const nameplaceholder = this.props.intl.formatMessage({
      id: "contact.name",
      defaultMessage: "Your Name*"
    });
    const emailplaceholder = this.props.intl.formatMessage({
      id: "contact.email",
      defaultMessage: "Your Email*"
    });
    const subjectplaceholder = this.props.intl.formatMessage({
      id: "contact.subject",
      defaultMessage: "Subject*"
    });
    const msgplaceholder = this.props.intl.formatMessage({
      id: "contact.msg",
      defaultMessage: "Your Message*"
    });
    const countryplaceholder = this.props.intl.formatMessage({
      id: "contact.country",
      defaultMessage: "Select Country*"
    });
    const phoneplaceholder = this.props.intl.formatMessage({
      id: "contact.phonenumber",
      defaultMessage: "Phone Number*"
    });
    

    return (
      <div>
        <section className="contactbg" id="contact">
          {/* Contact Us section */}
          <div className="container">
            <h2>
              <span>
                <FormattedMessage
                  id="contact.heading"
                  defaultMessage="Need help? "
                />
              </span>{" "}
              <FormattedMessage
                id="navbar.lab.contact"
                defaultMessage="Contact Us"
              />
            </h2>
            <div className="form-content">
              <Row>
                <Col lg={6} md={12}>
                  <div className="addressdetail">
                    <Row>
                      <Col lg={2} md={2} sm={2}>
                        <div className="iconbox">
                          <img src={location} alt="Location" />
                        </div>
                      </Col>
                      <Col lg={10} md={10} sm={10}>
                        <div className="address-box">
                          <h4>
                            Pakistan{" "}
                            <FormattedMessage
                              id="contact.office"
                              defaultMessage="Office"
                            />
                          </h4>
                          <p>
                            3rd Floor, Al-Rahim Arcade, National Market, <br />
                            Satellite Town, Rawalpindi, Pakistan.
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={2} md={2} sm={2}>
                        <div className="iconbox">
                          <img src={location} alt="Location" />
                        </div>
                      </Col>
                      <Col lg={10} md={10} sm={10}>
                        <div className="address-box">
                          <h4>
                            Singapore{" "}
                            <FormattedMessage
                              id="contact.office"
                              defaultMessage="Office"
                            />
                          </h4>
                          <p>
                            531 A Upper Cross Street #04-95, <br /> Hong Lim
                            Complex, Singapore.
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={2} md={2} sm={2}>
                        <div className="iconbox">
                          <img src={mail} alt="Mail" />
                        </div>
                      </Col>
                      <Col lg={10} md={10} sm={10}>
                        <div className="address-box">
                          <h4>
                            <FormattedMessage
                              id="contact.mail"
                              defaultMessage="Mail"
                            />
                          </h4>
                          <p>contact@rnssol.com</p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={2} md={2} sm={2}>
                        <div className="iconbox">
                          <img src={phone1} alt="Phone" />
                        </div>
                      </Col>
                      <Col lg={10} md={10} sm={10}>
                        <div className="address-box">
                          <h4>
                            <FormattedMessage
                              id="contact.phone"
                              defaultMessage="Phone"
                            />
                          </h4>
                          <p>+92-51-8356551 | +92-51-4940782</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={6} md={12}>

                  <div className="contact-form">
                    <Form >
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <FormGroup>
                            <Input
                              type="text"
                              name="name"
                              placeholder={nameplaceholder}
                              className="form-control"
                              onChange={this.onChangeHandler}
                              value={this.state.name}
                            />
                            {this.state.touched.name && (
                              <FormText>
                                {errors.name && errors.name[0]}
                              </FormText>
                            )}
                          </FormGroup>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <FormGroup>
                            <Input
                              type="email"
                              name="email"
                              placeholder={emailplaceholder}
                              className="form-control"
                              onChange={this.onChangeHandler}
                              value={this.state.email}
                            />
                            {this.state.touched.email && (
                              <FormText>
                                {errors.email && errors.email[0]}
                              </FormText>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <FormGroup>
                            <Input
                              type="text"
                              placeholder={subjectplaceholder}
                              className="form-control"
                              name="subject"
                              onChange={this.onChangeHandler}
                              value={this.state.subject}
                            />
                            {this.state.touched.subject && (
                              <FormText>
                                {errors.subject && errors.subject[0]}
                              </FormText>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <FormGroup>
                            <select
                              name="countryCode"
                              id=""
                              className="form-control"
                              value={this.state.selectedCountry}
                              onChange={this.onSelectFlag}
                              onBlur={this.onhandleBlur}
                            >
                              <option value="">{countryplaceholder}</option>
                              <option value="+47,Norway">Norway </option>
                              <option value="+44,UK">UK </option>
                              <option value="+213,Algeria">Algeria </option>
                              <option value="+376,Andorra">Andorra </option>
                              <option value="+244,Angola">Angola </option>
                              <option value="+1264,Anguilla">Anguilla </option>
                              <option value="+1268, Antigua Barbuda">
                                Antigua &amp; Barbuda{" "}
                              </option>
                              <option value="+54,Argentina">Argentina </option>
                              <option value="+374,Armenia">Armenia </option>
                              <option value="+297,Aruba">Aruba</option>
                              <option value="+61,Australia">Australia </option>
                              <option value="+43,Austria">Austria </option>
                              <option value="+994,Azerbaijan">Azerbaijan </option>
                              <option value="+1242,Bahamas">Bahamas </option>
                              <option value="+973,Bahrain">Bahrain </option>
                              <option value="+880,Bangladesh">Bangladesh </option>
                              <option value="+1246,Barbados">Barbados </option>
                              <option value="+375,Belarus">Belarus </option>
                              <option value="+32,Belgium">Belgium </option>
                              <option value="+501,Belize">Belize </option>
                              <option value="+229,Benin">Benin </option>
                              <option value="+1441,Bermuda">Bermuda </option>
                              <option value="+975,Bhutan">Bhutan </option>
                              <option value="+591,Bolivia">Bolivia </option>
                              <option value="+387,Bosnia Herzegovina">Bosnia Herzegovina </option>
                              <option value="+267,Botswana">Botswana </option>
                              <option value="+55,Brazil">Brazil </option>
                              <option value="+673,Brunei">Brunei </option>
                              <option value="+359,Bulgaria">Bulgaria </option>
                              <option value="+226,Burkina Faso">Burkina Faso </option>
                              <option value="+257,Burundi">Burundi </option>
                              <option value="+855,Cambodia">Cambodia </option>
                              <option value="+237,Cameroon">Cameroon </option>
                              <option value="+1,Canada">Canada </option>
                              <option value="+238,Cape Verde Islands">Cape Verde Islands </option>
                              <option value="+1345,Cayman Islands">Cayman Islands </option>
                              <option value="+236,Central African Republic">
                                Central African Republic{" "}
                              </option>
                              <option value="+56,Chile">Chile </option>
                              <option value="+86,China">China </option>
                              <option value="+57,Colombia">Colombia </option>
                              <option value="+269,Comoros">Comoros </option>
                              <option value="+242,Congo">Congo </option>
                              <option value="+682,Cook Islands">Cook Islands </option>
                              <option value="+506,Costa Rica">Costa Rica </option>
                              <option value="+385,Croatia">Croatia </option>
                              <option value="+53,Cuba">Cuba </option>
                              <option value="+90392,Cyprus North">Cyprus North </option>
                              <option value="+357,Cyprus South">Cyprus South </option>
                              <option value="+42,Czech Republic">Czech Republic </option>
                              <option value="+45,Denmark">Denmark </option>
                              <option value="+253,Djibouti">Djibouti </option>
                              <option value="+1809,Dominica">Dominica </option>
                              <option value="+1809,Dominican Republic">Dominican Republic </option>
                              <option value="+593,Ecuador">Ecuador </option>
                              <option value="+20,Egypt">Egypt </option>
                              <option value="+503,El Salvador">El Salvador </option>
                              <option value="+240,Equatorial Guinea">Equatorial Guinea </option>
                              <option value="+291,Eritrea">Eritrea </option>
                              <option value="+372,Estonia">Estonia </option>
                              <option value="+251,Ethiopia">Ethiopia </option>
                              <option value="+500,Falkland Islands">Falkland Islands </option>
                              <option value="+298,Faroe Islands">Faroe Islands </option>
                              <option value="+679,Fiji">Fiji </option>
                              <option value="+358,Finland">Finland </option>
                              <option value="+33,France">France </option>
                              <option value="+594,French Guiana">French Guiana </option>
                              <option value="+689,French Polynesia">French Polynesia </option>
                              <option value="+241,Gabon">Gabon </option>
                              <option value="+220,Gambia">Gambia </option>
                              <option value="+7880,Georgia">Georgia </option>
                              <option value="+49,Germany">Germany </option>
                              <option value="+233,Ghana">Ghana </option>
                              <option value="+350,Gibraltar">Gibraltar </option>
                              <option value="+30,Greece">Greece </option>
                              <option value="+299,Greenland">Greenland </option>
                              <option value="+1473,Grenada">Grenada </option>
                              <option value="+590,Guadeloupe">Guadeloupe </option>
                              <option value="+671,Guam">Guam </option>
                              <option value="+502,Guatemala">Guatemala </option>
                              <option value="+224,Guinea">Guinea </option>
                              <option value="+245,Guinea - Bissau">Guinea - Bissau </option>
                              <option value="+592,Guyana">Guyana </option>
                              <option value="+509,Haiti">Haiti </option>
                              <option value="+504,Honduras">Honduras </option>
                              <option value="+852,Hong Kong">Hong Kong </option>
                              <option value="+36,Hungary">Hungary </option>
                              <option value="+354,Iceland">Iceland </option>
                              <option value="+91,India">India </option>
                              <option value="+62,Indonesia">Indonesia </option>
                              <option value="+98,Iran">Iran </option>
                              <option value="+964,Iraq">Iraq </option>
                              <option value="+353,Ireland">Ireland </option>
                              <option value="+972,Israel">Israel </option>
                              <option value="+39,Italy">Italy </option>
                              <option value="+1876,Jamaica">Jamaica </option>
                              <option value="+81,Japan">Japan </option>
                              <option value="+962,Jordan">Jordan </option>
                              <option value="+7,Kazakhstan">Kazakhstan </option>
                              <option value="+254,Kenya">Kenya </option>
                              <option value="+686,Kiribati">Kiribati </option>
                              <option value="+850,Korea North">Korea North </option>
                              <option value="+82,Korea South">Korea South </option>
                              <option value="+965,Kuwait">Kuwait </option>
                              <option value="+996,Kyrgyzstan">Kyrgyzstan </option>
                              <option value="+856,Laos">Laos </option>
                              <option value="+371,Latvia">Latvia </option>
                              <option value="+961,Lebanon">Lebanon </option>
                              <option value="+266,Lesotho">Lesotho </option>
                              <option value="+231,Liberia">Liberia </option>
                              <option value="+218,Libya">Libya </option>
                              <option value="+417,Liechtenstein">Liechtenstein </option>
                              <option value="+370,Lithuania">Lithuania </option>
                              <option value="+352,Luxembourg">Luxembourg </option>
                              <option value="+853,Macao">Macao </option>
                              <option value="+389,Macedonia">Macedonia </option>
                              <option value="+261,Madagascar">Madagascar </option>
                              <option value="+265,Malawi">Malawi </option>
                              <option value="+60,Malaysia">Malaysia </option>
                              <option value="+960,Maldives">Maldives </option>
                              <option value="+223,Mali">Mali </option>
                              <option value="+356,Malta">Malta </option>
                              <option value="+692,Marshall Islands">Marshall Islands </option>
                              <option value="+596,Martinique">Martinique </option>
                              <option value="+222,Mauritania">Mauritania </option>
                              <option value="+269,Mayotte">Mayotte </option>
                              <option value="+52,Mexico">Mexico </option>
                              <option value="+691,Micronesia">Micronesia </option>
                              <option value="+373,Moldova">Moldova </option>
                              <option value="+377,Monaco">Monaco </option>
                              <option value="+976,Mongolia">Mongolia </option>
                              <option value="+1664,Montserrat">Montserrat </option>
                              <option value="+212,Morocco">Morocco </option>
                              <option value="+258,Mozambique">Mozambique </option>
                              <option value="+95,Myanmar">Myanmar </option>
                              <option value="+264,Namibia">Namibia </option>
                              <option value="+674,Nauru">Nauru </option>
                              <option value="+977,Nepal">Nepal </option>
                              <option value="+31,Netherlands">Netherlands </option>
                              <option value="+687,New Caledonia">New Caledonia </option>
                              <option value="+64,New Zealand">New Zealand </option>
                              <option value="+505,Nicaragua">Nicaragua </option>
                              <option value="+227,Niger">Niger </option>
                              <option value="+234,Nigeria">Nigeria </option>
                              <option value="+683,Niue">Niue </option>
                              <option value="+672,Norfolk Islands">Norfolk Islands </option>
                              <option value="+670,Northern Marianas">Northern Marianas </option>
                              <option value="+47,Norway">Norway </option>
                              <option value="+968,Oman">Oman </option>
                              <option value="+92,Pakistan">Pakistan </option>
                              <option value="+680,Palau">Palau </option>
                              <option value="+507,Panama">Panama </option>
                              <option value="+675,Papua New Guinea">Papua New Guinea </option>
                              <option value="+595,Paraguay">Paraguay </option>
                              <option value="+51,Peru">Peru </option>
                              <option value="+63,Philippines">Philippines </option>
                              <option value="+48,Poland">Poland </option>
                              <option value="+351,Portugal">Portugal </option>
                              <option value="+1787,Puerto Rico">Puerto Rico </option>
                              <option value="+974,Qatar">Qatar </option>
                              <option value="+262,Reunion">Reunion </option>
                              <option value="+40,Romania">Romania </option>
                              <option value="+7,Russia">Russia </option>
                              <option value="+250,Rwanda">Rwanda </option>
                              <option value="+378,San Marino">San Marino </option>
                              <option value="+239,Sao Tome Principe">
                                Sao Tome &amp; Principe{" "}
                              </option>
                              <option value="+966,Saudi Arabia">Saudi Arabia </option>
                              <option value="+221,Senegal">Senegal </option>
                              <option value="+381,Serbia">Serbia </option>
                              <option value="+248,Seychelles">Seychelles </option>
                              <option value="+232,Sierra Leone">Sierra Leone </option>
                              <option value="+65,Singapore">Singapore </option>
                              <option value="+421,Slovak Republic">Slovak Republic </option>
                              <option value="+386,Slovenia">Slovenia </option>
                              <option value="+677,Solomon Islands">Solomon Islands </option>
                              <option value="+252,Somalia">Somalia </option>
                              <option value="+27,South Africa">South Africa </option>
                              <option value="+34,Spain">Spain </option>
                              <option value="+94,Sri Lanka">Sri Lanka </option>
                              <option value="+290,St. Helena">St. Helena </option>
                              <option value="+1869,St. Kitts">St. Kitts </option>
                              <option value="+1758,St. Lucia">St. Lucia </option>
                              <option value="+249,Sudan">Sudan </option>
                              <option value="+597,Suriname">Suriname </option>
                              <option value="+268,Swaziland">Swaziland </option>
                              <option value="+46,Sweden">Sweden </option>
                              <option value="+41,Switzerland">Switzerland </option>
                              <option value="+963,Syria">Syria </option>
                              <option value="+886,Taiwan">Taiwan </option>
                              <option value="+7,Tajikstan">Tajikstan </option>
                              <option value="+66,Thailand">Thailand </option>
                              <option value="+228,Togo">Togo </option>
                              <option value="+676,Tonga">Tonga </option>
                              <option value="+1868,Trinidad Tobago">
                                Trinidad &amp; Tobago{" "}
                              </option>
                              <option value="+216,Tunisia">Tunisia </option>
                              <option value="+90,Turkey">Turkey </option>
                              <option value="+993,Turkmenistan">Turkmenistan </option>
                              <option value="+1649,Turks Caicos Islands">
                                Turks &amp; Caicos Islands{" "}
                              </option>
                              <option value="+688,Tuvalu">Tuvalu </option>
                              <option value="+256,Uganda">Uganda </option>
                              <option value="+44,UK">UK </option>
                              <option value="+380,Ukraine">Ukraine </option>
                              <option value="+971,United Arab Emirates">United Arab Emirates </option>
                              <option value="+598,Uruguay">Uruguay </option>
                              <option value="+1,USA">USA </option>
                              <option value="+7,Uzbekistan">Uzbekistan </option>
                              <option value="+678,Vanuatu">Vanuatu </option>
                              <option value="+379,Vatican City">Vatican City </option>
                              <option value="+58,Venezuela">Venezuela </option>
                              <option value="+84,Vietnam">Vietnam </option>
                              <option value="+84,Virgin Islands - British">
                                Virgin Islands - British{" "}
                              </option>
                              <option value="+84,Virgin Islands - US">Virgin Islands - US </option>
                              <option value="+681,Wallis  Futuna">Wallis &amp; Futuna </option>
                              <option value="+969,Yemen (North)">Yemen (North) </option>
                              <option value="+967,Yemen (South)">Yemen (South) </option>
                              <option value="+260,Zambia">Zambia </option>
                              <option value="+263,Zimbabwe">Zimbabwe </option>
                            </select>
                            {this.state.touched.selectedCountry && (
                              <FormText>
                                {errors.selectedCountry && errors.selectedCountry[0]}
                              </FormText>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <FormGroup>
                            <div className="ctrycode">
                              <span className="codeplace">
                                {this.state.code}
                              </span>
                              <Input
                                name="phone"
                                type="text"
                                placeholder={phoneplaceholder}
                                className="input-setphone form-control"
                                onChange={this.onPhoneHandler}
                                value={this.state.phone}
                              />
                              
                            </div>
                            {this.state.touched.phone && (
                            <FormText>
                              {errors.phone && errors.phone[0]}
                            </FormText>
                          )}
                          </FormGroup>
                          
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <FormGroup>
                            <textarea
                              placeholder={msgplaceholder}
                              name="message"
                              rows="6"
                              value={this.state.message}
                              onChange={this.onChangeHandler}
                            ></textarea>

                            {this.state.touched.message && (
                              <FormText>
                                {errors.message && errors.message[0]}
                              </FormText>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <div className="captcha-cont">
                            <ReCAPTCHA
                              style={{
                                transform: "scale(0.77)",
                                transformOrigin: "0 0"
                              }}
                              className="g-recaptcha"
                              data-theme="light"
                              sitekey="6LcHhcEUAAAAAFPrNntGvpgGxIGiS1WgXwUxEByS"
                              // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                              onChange={this.onCaptchaHandler}
                              height="100px"
                              width="100%"
                            />
                          </div>
                          
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={6} sm={12}></Col>
                        <Col lg={6} md={6} sm={12}>
                          <div className="submitbtn">
                            <Button
                              disabled={
                                name === "" ||
                                email === "" ||
                                message === "" ||
                                phone === "" ||
                                subject === "" ||
                                country === "" ||
                                Object.keys(errors).length !== 0
                              }

                              onClick={this.submitFormHandler}
                              type="submit"
                            >
                              {/* {contactUsLoading ? (
                                <Loader
                                  type="ball-beat"
                                  active={contactUsLoading}
                                />
                              ) : ( */}
                                  <FormattedMessage
                                    id="contact.sendbtn"
                                    defaultMessage="Send Message"
                                  />
                                {/* )} */}
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default injectIntl(ContactUs);
