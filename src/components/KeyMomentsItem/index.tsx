import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {KmomentsData} from "../../commonTypes"
import {smallGap} from "../../constants";


const KeyMomentsItem = (props: KmomentsData) => {
  const {id, keyMoment} = props;
  return (
    <TouchableOpacity style={styles.items} >
          <Text style={styles.fontId}>{id}</Text>
          <Text style={styles.fontMoment}>{keyMoment}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    marginBottom: smallGap
  },
  fontMoment: {
    fontSize: 20,
  },
  fontId: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: smallGap,
  },
});

export default  KeyMomentsItem
