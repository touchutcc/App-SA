import React from 'react';
import {View,Text} from "react-native"
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import rootReducer from "./src/reducers"

export default function App() {
  const store = createStore(rootReducer,applyMiddleware(logger))
  return (
    <Provider store={store}>
      <View>
        <Text>Hello World</Text>
      </View>
    </Provider>
  );
}
