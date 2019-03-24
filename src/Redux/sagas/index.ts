import {all, fork, AllEffect} from "redux-saga/effects";
import {rootFetch} from "../../containers/Comments/redux/saga"


export function *rootSaga () {
  yield all([
    fork(rootFetch)
  ])
};
