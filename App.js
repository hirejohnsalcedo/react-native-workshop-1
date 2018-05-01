import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Horizontal from "./src/components/horizontal/horizontal";
import Vertical from "./src/components/vertical/vertical";

const { width } = Dimensions.get("window");
const images = [
  require("./src/assets/1.jpeg"),
  require("./src/assets/2.jpeg"),
  require("./src/assets/3.jpeg"),
]
export default class App extends Component {
  state = {
    activeIndex: 0,
  }

  handleSwipe = () => {
    this.setState((prevState) => ({ activeIndex: prevState.activeIndex + 1 === images.length ? 0 : prevState.activeIndex + 1 }),
    () => this.horizontalScrollViewRef.scrollTo({ x: width * this.state.activeIndex }))
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.handleSwipe}
          style={{ backgroundColor: "white", position: "absolute", zIndex: 999, height: 50, width: 50, justifyContent: "center", alignItems: "center", left: width / 2.5, top: 75 }}>
          <Text>NEXT</Text>
        </TouchableOpacity>
        <Horizontal
          images={images}
          horizontalScrollViewRef={(ref) => this.horizontalScrollViewRef = ref}
        />
        <Vertical />
      </View>
    )
  }
}
