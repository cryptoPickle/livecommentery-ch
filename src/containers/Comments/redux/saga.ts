import {take, all, fork, put, call} from "redux-saga/effects";
import {fetch, FETCH} from "./actions";
import {get} from "../../../utils";

const {success, fail} = fetch

function* fetchWatcher(){
  while (true){
    yield take(FETCH.REQUEST)
    yield fork(fetchData)
  }
}

function *fetchData() {
  try{
    const resp = yield call(get, "/data");

    //can be regex but as fat as i know json-server will return 200
    //i use hack :)
    if (!resp) {
      return yield put(fail("Network Error"))
    }
    if(resp.status !== 200) {
      yield put(fail("Cant fetch data from server.."))
    }

    yield put(success(resp.data))
  }catch (e) {
    console.error(e);
    yield put(fail(e.message))
  }
}

export function *rootFetch() {
  yield all([fork(fetchWatcher)])
}

