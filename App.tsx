import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native"


interface Props {}
export default class App extends Component<Props> {
  render() {
    const {container} = styles
    return (
      <View style={container}>
        <Text>Live Commentery</Text>
      </View>
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
