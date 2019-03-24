import React from "react"
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native"
import {largeGap, mediumGap} from "../../constants";

export interface KmomentsData {
  id: number
  keyMoment: string,
  avatar: string
  callback: (id: number) => void
}


const KeyMomentsItem = (props: KmomentsData) => {
  const {keyMoment, avatar, callback, id} = props;
  return (
    <TouchableOpacity style={styles.items} onPress={() => callback(id)} >
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
