import {REQUEST,FAILURE,SUCCESS,createActionTypes, actionCreator} from "../../../Redux/utils";
import {actionCreatorT} from "../../../Redux/utils/actionCreator";


const FETCH = createActionTypes("FETCH");

interface Fetch {
  request(payload: any): actionCreatorT,
  success(payload: any): actionCreatorT,
  fail(payload: any): actionCreatorT,

}

const fetch: Fetch = {
  request: (payload: any): actionCreatorT => actionCreator(FETCH[REQUEST], {payload}),
  success: (payload: any): actionCreatorT => actionCreator(FETCH[SUCCESS], {payload}),
  fail: (payload: any): actionCreatorT => actionCreator(FETCH[FAILURE], {payload})
};

export {fetch, FETCH}
