import {connect} from "react-redux";
import Comments from "./Comments"
import {fetch} from "./redux/actions"


// I like to keep separate my data and component layer, this way,
//if i need to use this container later on i can use it without
//worriying about redux.

const mapDispatchToProps = (dispatch: any ) => ({
  fetch() {
    dispatch(fetch.request())
  }
});

const mapStateToProps = ({comments}: any) => {
  return {
    comments
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Comments)
