import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {mediumGap} from "../../constants";

interface Props {
  avatar: string,
  id: number,
  comment: string,
  isActive: boolean,
  isLast?: boolean
}

const Comment = (props: Props) => {
  const {isActive, isLast} = props;
  return(
    <View style={styles.container}>
      <View style={[isActive ? styles.borderActive : styles.border]}>
        <View style={styles.avatarContainer}>
          <Image source={{uri: props.avatar}} style={styles.avatar} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={{marginTop: 5}}>{props.comment}</Text>
      </View>
      {isLast ? null : <View style={[isActive ? styles.lineActive : styles.line]} />}
    </View>
  )
};

const styles =StyleSheet.create({
  container:{
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: mediumGap
  },
  avatar: {
    width: 45,
    height: 45,
  },
  avatarContainer: {
    overflow: "hidden",
    borderRadius: 45,
    width: 45,
    // marginRight: largeGap - 15,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  borderActive: {
    borderWidth: 3,
    borderRadius: 45,
    borderColor: "#0FEB9F"
  },
  border: {
    borderWidth: 3,
    borderRadius: 45,
    borderColor: "white"
  },
  line: {
    zIndex: -1,
    width: 1,
    height: "100%",
    backgroundColor: "#BDBDBD",
    position: "absolute",
    left: 25,
    top:20,
  },
  lineActive: {
    zIndex: -1,
    width: 1,
    height: "100%",
    backgroundColor: "#0FEB9F",
    position: "absolute",
    left: 25,
    top:20,
  }
})

export default Comment;
