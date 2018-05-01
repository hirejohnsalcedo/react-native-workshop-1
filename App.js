import React, { Component } from "react";
import { View, Text } from "react-native";
import Horizontal from "./src/components/horizontal/horizontal";
import Vertical from "./src/components/vertical/vertical";

export default class App extends Component {
  render() {
    return (
      <View>
        <Horizontal />
        <Vertical />
      </View>
    )
  }
}
