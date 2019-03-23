import React from "react"
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native"
import {KmomentsData} from "../../commonTypes"
import {largeGap, mediumGap, smallGap} from "../../constants";


const KeyMomentsItem = (props: KmomentsData) => {
  const {id, keyMoment, avatar} = props;
  return (
    <TouchableOpacity style={styles.items} >
        <View style={styles.avatarContainer}>
          <Image source={{uri: avatar}} style={styles.avatar}/>
        </View>
          <Text style={styles.fontMoment}>{keyMoment}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    marginBottom: mediumGap,
    alignItems: "center",
  },
  fontMoment: {
    fontSize: 20,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  avatarContainer: {
    overflow: "hidden",
    borderRadius: 45,
    width: 45,
    marginRight: largeGap - 10,
  }
});

export default  KeyMomentsItem
