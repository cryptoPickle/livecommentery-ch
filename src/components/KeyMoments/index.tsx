import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import {mediumGap, smallGap} from "../../constants"


interface IState {
  show: boolean
}
interface Data {
  id: number
  keyMoment: string
}

interface IProps {
  data: Data[]
}
export default class KeyMoments extends Component <IProps, IState> {
  state = {
    show: true
  };
  handleOpen = (): void => {
    this.setState(({show}) => ({show: !show}))
  };
  render(){
    const {show} = this.state;
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Key Moments</Text>
        <TouchableOpacity onPress={this.handleOpen} style={styles.arrow}>
          <Icon name={show ? "ios-arrow-dropup" : "ios-arrow-dropdown"} size={38}/>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    backgroundColor: "red",
    padding: mediumGap ,
    position: "absolute",
    bottom: 0,
  },
  arrow: {
    position: "absolute",
    right: mediumGap
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});


