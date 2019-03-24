import React, {Component} from "react";
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import Commentery from "../../components/Commentery"
import KeyMoments from "../../components/KeyMoments"

interface Data {
  id: number,
  comment: string,
  keyMoment: string,
  avatar: string
}

interface comments {
  error?: string;
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
  selectedId: number,

}

class Comments extends Component<Props, IState> {
  state = {
    reRender: false,
    selectedId: 0,

  };




  componentDidMount(): void {
    this.props.fetch()
  }
  handleId = (id:number) => {
    this.setState({selectedId: id})
  };

  renderError = (error: string):React.ReactNode | null => {
    if(error){
      return(
        <View style={styles.container}>
          <Text style={styles.errorMock}>Opps We Have Some Issue</Text>
          <Text style={styles.errorType}>{error} :(</Text>
        </View>
      )
    }
    return null
  };
  render(): React.ReactNode {
    const {isLoading, data} = this.props.comments;
    const {selectedId} = this.state;

    if(this.props.comments.error) {
      return this.renderError(this.props.comments.error);
    }

    if(isLoading){
      return (
        <View style={styles.container}>
         <ActivityIndicator size="large" color="#D81B60"/>
        </View>
      )
    }
    return (
      <View style={{flex: 1}}>
        <Commentery data={data} selectedId={selectedId}/>
        <KeyMoments data={data} selectedId={(id:number) => this.handleId(id)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorMock:{
    fontSize: 28,
    fontWeight: "bold",
    color: "#D81B60",
    marginBottom: 10
  },
  errorType: {
    color: "#880E4F",
    fontSize: 20
  }
});

export default Comments;
