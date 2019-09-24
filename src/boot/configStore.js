import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

export default function configStore(){
    const enhancer = compose(
        applyMiddleware(thunk),
        devTools({
          name: "MyApp",
          realtime: true
        })
      );
    let store = createStore(reducer);
    return store
}