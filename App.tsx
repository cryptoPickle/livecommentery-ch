import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native"
import createStore,{reducers, rootSaga} from "./src/Redux"
import {Provider} from "react-redux"
import Comments from "./src/containers/Comments"
const store = createStore(reducers, rootSaga);
import {pageWidth} from "./src/constants"
interface Props {}

const data = [
  {
    "id": "1",
    "comment": "When the crewmate trembles for nowhere, all space suits arrest strange, reliable particles.",
    "keyMoment": "crewmate",
    "avatar": "https://api.adorable.io/avatars/285/1"
  },
  {
    "id": "2",
    "comment": "Dozens of stars evacuate boldly, chemical crewmates.",
    "keyMoment": "stars",
    "avatar": "https://api.adorable.io/avatars/285/2"

  },
  {
    "id": "3",
    "comment": "Always influence an alien.",
    "keyMoment": "alien",
    "avatar": "https://api.adorable.io/avatars/285/3"
  },
  {
    "id": "4",
    "comment": "All the suns fight sub-light, boldly lieutenant commanders.",
    "keyMoment": "sub-light",
    "avatar": "https://api.adorable.io/avatars/285/4"
  },
  {
    "id": "5",
    "comment": "Seismic, spheroid moons virtually love an ordinary, huge astronaut.",
    "keyMoment": "astronaut",
    "avatar": "https://api.adorable.io/avatars/285/5"

  },
  {
    "id": "6",
    "comment": "Warp oddly like a sub-light queen.",
    "keyMoment": "sub-light queen",
    "avatar": "https://api.adorable.io/avatars/285/6"

  },
  {
    "id": "7",
    "comment": "All those beauties will be lost in advices like energies in modifications,All those beauties will be lost in advices like energies in modifications,All those beauties will be lost in advices like energies in modifications,All those beauties will be lost in advices like energies in modifications",
    "keyMoment": "energies",
    "avatar": "https://api.adorable.io/avatars/285/7"
  },
  {
    "id": "8",
    "comment": "Space suits meet with assimilation at the colorful wormhole!",
    "keyMoment": "wormhole",
    "avatar": "https://api.adorable.io/avatars/285/8"
  },
  {
    "id": "9",
    "comment": "Most unusual moons lead to the honor.",
    "keyMoment": "unusual moons",
    "avatar": "https://api.adorable.io/avatars/285/9"

  },
  {
    "id": "10",
    "comment": "All the suns fight sub-light, boldly lieutenant commanders.",
    "keyMoment": "sub-light",
    "avatar": "https://api.adorable.io/avatars/285/4"
  },
  {
    "id": "11",
    "comment": "Seismic, spheroid moons virtually love an ordinary, huge astronaut.",
    "keyMoment": "astronaut",
    "avatar": "https://api.adorable.io/avatars/285/5"

  },
  {
    "id": "12",
    "comment": "Warp oddly like a sub-light queen.",
    "keyMoment": "sub-light queen",
    "avatar": "https://api.adorable.io/avatars/285/6"

  },
  {
    "id": "13",
    "comment": "All those beauties will be lost in advices like energies in modifications,All those beauties will be lost in advices like energies in modifications,All those beauties will be lost in advices like energies in modifications,All those beauties will be lost in advices like energies in modifications",
    "keyMoment": "energies",
    "avatar": "https://api.adorable.io/avatars/285/7"
  },
  {
    "id": "14",
    "comment": "Space suits meet with assimilation at the colorful wormhole!",
    "keyMoment": "wormhole",
    "avatar": "https://api.adorable.io/avatars/285/8"
  },
  {
    "id": "15",
    "comment": "Most unusual moons lead to the honor.",
    "keyMoment": "unusual moons",
    "avatar": "https://api.adorable.io/avatars/285/9",
    "last": true

  },

];

export default class App extends Component<Props> {
  render() {
    const {container} = styles
    return (
      <Provider store={store}>

        <View style={container}>
          <Text style={{fontSize: 18, fontWeight: "bold", paddingLeft: 20}}>Live Commentery</Text>
          <Comments />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 60,
  },
});
