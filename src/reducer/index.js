import dataReducer from "./dataReducer";
import { combineReducers } from "redux";

export default combineReducers({
  blogs: dataReducer
});


