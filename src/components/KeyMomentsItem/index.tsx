import React from "react"
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native"
import {largeGap, mediumGap, smallGap} from "../../constants";

export interface KmomentsData {
  id: string
  keyMoment: string,
  avatar: string
  callback: () => void
}


const KeyMomentsItem = (props: KmomentsData) => {
  const {keyMoment, avatar, callback} = props;
  return (
    <TouchableOpacity style={styles.items} onPress={callback} >
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
    fontSize: mediumGap,
    color: "#9E9E9E"
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
