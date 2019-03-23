import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import {mediumGap, smallGap} from "../../constants"
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
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <KeyMomentsItem id={item.id} keyMoment={item.keyMoment}/> }
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
            <Icon name={!show ? "ios-arrow-dropup" : "ios-arrow-dropdown"} size={38}/>
          </TouchableOpacity>
        </View>
        <View>
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
    backgroundColor: "red",
    padding: mediumGap ,
    position: "absolute",
    bottom: 0,
  },
  arrow: {
    position: "absolute",
    right: smallGap,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",

  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

  }
});


