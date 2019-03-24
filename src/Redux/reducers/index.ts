import {combineReducers} from "redux";
import {fetchReducer} from "../../containers/Comments/redux/reducer"
export const reducers = combineReducers({
  comments: fetchReducer
});
