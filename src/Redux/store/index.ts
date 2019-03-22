import {createStore, compose, applyMiddleware, Reducer} from "redux";
import createSaga, {Saga} from "redux-saga";


const sagas = createSaga();

export const initializeStore = (reducers: Reducer, saga:Saga) => {
  const store = createStore(reducers, {}, compose(
    applyMiddleware(sagas)
  ));
  sagas.run(saga);
  return store;
};
