import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native"
import createStore,{reducers, rootSaga} from "./src/Redux"
import {Provider} from "react-redux"
import Comments from "./src/containers/Comments"
const store = createStore(reducers, rootSaga);

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: "bold", paddingLeft: 20}}>Live Commentery</Text>
      <Comments />
    </View>
  </Provider>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 60,
  },
});

export default App
