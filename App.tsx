import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native"
import createStore,{reducers, rootSaga} from "./src/Redux"
import {Provider} from "react-redux"

const store = createStore(reducers, rootSaga);
interface Props {}
export default class App extends Component<Props> {
  render() {
    const {container} = styles
    return (
      <Provider store={store}>
        <View style={container}>
          <Text>Live Commentery</Text>
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
