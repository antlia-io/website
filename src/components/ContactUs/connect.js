import { connect } from "react-redux";
import { userContactHandler } from "../../store/actions/contactus";

export function mapStateToProps(state) {
  return {
    contactUsLoading:state.contactUsReducer.contactUsLoading
  };
}

const mapDispatchToProps = {
  userContactHandler
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
