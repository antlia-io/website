import { connect } from "react-redux";
import { userNewsLetterHandler} from "../../store/actions/newsletter";

export function mapStateToProps(state) {
  return {
    newsLetterLoading:state.newsLetterReducer.newsLetterLoading
  };
}

const mapDispatchToProps = {
  userNewsLetterHandler
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

