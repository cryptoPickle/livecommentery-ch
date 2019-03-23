import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import {largeGap, mediumGap, smallGap} from "../../constants"
import KMomentItem from "../KeyMomentsItem"

//@Types
import {KmomentsData} from "../../commonTypes"
import KeyMomentsItem from "../KeyMomentsItem";

interface IState {
  show: boolean
}


interface IProps {
  data: KmomentsData[]
}
export default class KeyMoments extends Component <IProps, IState> {
  state = {
    show: false
  };


  renderContent = (shouldShow: boolean) => {
    const {data} = this.props;
    if (shouldShow){
      return <FlatList
        data={data}
        style={{width: "100%", height: largeGap * 5}}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
          <KeyMomentsItem id={item.id} keyMoment={item.keyMoment} avatar={item.avatar} callback={() => {}}/> }
      />
    }
    return null
  };


  handleOpen = (): void => {
    this.setState(({show}) => ({show: !show}))
  };
  render(){
    const {show} = this.state;
    return(
      <View style={styles.container}>
        <View
          style={[styles.titleContainer, show ? {marginBottom: mediumGap} : null]}>
          <Text style={styles.text}>Key Moments</Text>
          <TouchableOpacity onPress={this.handleOpen} style={styles.arrow}>
            <Icon name={!show ? "ios-arrow-up" : "ios-arrow-down"} size={25} color="#757575"/>
          </TouchableOpacity>
        </View>
        <View style={styles.keyMoments}>
          {this.renderContent(show)}
        </View>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    backgroundColor: "#EEEEEE",
    padding: mediumGap ,
    position: "absolute",
    bottom: 0,
  },
  arrow: {
    height: 30,
    width: 30,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  text: {
    fontSize: mediumGap,
    fontWeight: "bold",

  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  keyMoments: {
    width: "100%",
    justifyContent: "flex-start",
    marginLeft: smallGap
  }
});


