import {FETCH} from "./actions"
import {Actions} from "../../../commonTypes"
interface Data {
  id: string,
  comment: string,
  keyMoment: string,
  "avatar": string
}

interface State {
  data: Data[]
  isLoading: boolean,
  error ?: string
}

const initialS: State = {
  data: [{id: "", comment: "", keyMoment: "", avatar: ""}],
  isLoading: false,
};



const fetchReducer = (state = initialS, {type, payload}: Actions) => {
  switch (type) {
    case FETCH.REQUEST:
      return {...state, isLoading: true};
    case FETCH.SUCCESS:
      return {...state, isLoading:false, data: payload}
    case FETCH.FAILURE:
      return {...state, isLoading: false, error: payload}
  }
};

export {fetchReducer}
