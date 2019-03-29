import { combineReducers } from "redux";
import User from "./reducers/user";

const BaseReducer = combineReducers({ User });

export default BaseReducer;
