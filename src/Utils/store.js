import { AllReducers } from "./AllReducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const store = createStore(
  AllReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
