import { combineReducers } from "redux";

import DailyInspirationReducer from "./DailyInspirationReducer.js";
import Home from "../../HomeComponent/Home";
import SaveAndShare from "../../HomeComponent/SaveAndShare";
import StartSelecting from "../../HomeComponent/StartSelecting";

const rootReducer = combineReducers({
  DailyInspirationReducer,
  // Home,
  // SaveAndShare,
  // StartSelecting,
});
//WHY NOT JUST

export default rootReducer;

// const combineReducers()  {
//   DailyInspiration,
//   Home,
//   SaveAndShare,
//   StartSelecting,
// };

// export default combineReducers;
