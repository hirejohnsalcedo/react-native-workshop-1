import React, { Component } from "react";
import { View, Text } from "react-native";
import Horizontal from "./src/components/horizontal/horizontal";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Horizontal />
      </View>
    )
  }
}
