import React, {Component} from "react";
import Commentery from "../../components/Commentery"
import KeyMoments from "../../components/KeyMoments"
import {connect} from "react-redux"

class Comments extends Component {
  componentDidMount(): void {

  }

  render(): React.ReactNode {
    return (
      <View>
        <Commentery data={}/>
        <KeyMoments data={}/>
      </View>
    )
  }
}

export default connect(null,null)(Comments)
