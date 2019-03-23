import React, {Component} from "react";
import {FlatList,View} from "react-native";
import Comment from "../Comment"
import {largeGap} from "../../constants";


interface IState {
  show: boolean
}

export interface KmomentsData {
  id: string
  keyMoment: string,
  avatar: string,
  comment: string,
  last ?: boolean
}


interface IProps {
  data: KmomentsData[]
}

class Commentery extends Component <IProps> {
  render() {
    const {data} = this.props;
    return (
      <View style={{width: "100%", height: "90%", padding: 20,  zIndex: -1}}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Comment avatar={item.avatar} id={item.id} comment={item.comment} isActive={false} isLast={item.last}/>}
        />
      </View>
    )
  }
}

export default Commentery
