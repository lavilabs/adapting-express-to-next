import { createStore } from "redux";

import rootReducer from "./redux/reducers/reducers.js";

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
