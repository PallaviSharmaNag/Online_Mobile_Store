import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import { addCharacterById } from "./actions";
import { composeWithDevTools } from "redux-devtools-extension";

import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log("store.getState()", store.getState());
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
