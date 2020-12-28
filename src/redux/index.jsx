import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "./reducers";
// import Logger from './middleware/Logger';
// import validation from './middleware/validator';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

// const loggerMiddleware = applyMiddleware(Logger);
// const validatorMiddleware = applyMiddleware(validation);
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhancingMiddleware = composeEnhancers(
  // loggerMiddleware,
  // validatorMiddleware,
  applyMiddleware(sagaMiddleware)
);

const store = createStore(RootReducer, undefined, storeEnhancingMiddleware);

sagaMiddleware.run(rootSaga);

export default store;
