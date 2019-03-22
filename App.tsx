import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native"
import createStore,{reducers, rootSaga} from "./src/Redux"
import {Provider} from "react-redux"
import KeyMoments from "./src/components/KeyMoments"
const store = createStore(reducers, rootSaga);
interface Props {}


export default class App extends Component<Props> {
  render() {
    const {container} = styles
    return (
      <Provider store={store}>
        <View style={container}>
          <KeyMoments data={[{id: 1, keyMoment: "test"}]} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
