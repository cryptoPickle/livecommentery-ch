import React, {Component} from "react";
import {View, Text} from "react-native";
import Commentery from "../../components/Commentery"
import KeyMoments from "../../components/KeyMoments"

interface Data {
  id: number,
  comment: string,
  keyMoment: string,
  avatar: string
}

interface comments {
  data: Data[],
  isLoading: boolean,
}

interface Props {
  fetch: () => void,
  comments: comments
  error?: string
}

interface IState {
  reRender: boolean,
  selectedId: number
}

class Comments extends Component<Props, IState> {
  state = {
    reRender: false,
    selectedId: 0
  };

  componentDidMount(): void {
    this.props.fetch()
  }
  handleId = (id:number) => {
    this.setState({selectedId: id})
  };
  render(): React.ReactNode {
    const {isLoading, data} = this.props.comments;
    const {selectedId} = this.state;
    if(isLoading){
      return <Text>Loading</Text>
    }
    return (
      <View style={{flex: 1}}>
        <Commentery data={data} selectedId={selectedId}/>
        <KeyMoments data={data} selectedId={(id:number) => this.handleId(id)}/>
      </View>
    )
  }
}

export default Comments;
