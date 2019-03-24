import React, {Component} from "react";
import {FlatList,View} from "react-native";
import Comment from "../Comment"
import {largeGap} from "../../constants";


interface IState {
  show: boolean
}

export interface KmomentsData {
  id: number
  keyMoment: string,
  avatar: string,
  comment: string,
  last ?: boolean
}


interface IProps {
  data: KmomentsData[],
  selectedId: number
}

class Commentery extends Component <IProps> {
  flatListRef: any;

  scrolltoIndex = (id: number) => {
    this.flatListRef.scrollToIndex({animated: true, index: id, viewPosition: 0})
  };

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>): void {
    if(prevProps.selectedId !== this.props.selectedId){
      this.scrolltoIndex(this.props.selectedId)
    }
  }

  render() {
    const {data, selectedId} = this.props;
    return (
      <View style={{width: "100%", height: "90%", padding: 20,  zIndex: -1}}>
        <FlatList
          data={data}
          ref={(ref) => this.flatListRef = ref}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => <Comment avatar={item.avatar} id={item.id} comment={item.comment}  isActive={selectedId === parseInt(item.id)} isLast={item.last}/>}
        />
      </View>
    )
  }
}

export default Commentery
