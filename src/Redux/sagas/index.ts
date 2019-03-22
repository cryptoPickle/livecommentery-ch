import {all, fork, AllEffect} from "redux-saga/effects";

export function *rootSaga <T> (): IterableIterator<AllEffect<T>> {
  yield all([])
}
