import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from './saga/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  rA: reducerA,
  rB: reducerB,
  r: reducer,
});

const logAction = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      console.log("middleware : ", result);
      return result;
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
