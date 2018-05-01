import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions, PanResponder } from "react-native";
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

  handlePanResponderMove = (_, gestureState) => {
    const isBlockingFurtherSwipes = this.activeIndexOnPanResponderGrant !== this.state.activeIndex;
    if (isBlockingFurtherSwipes) {
      return null;
    }
    const horizontalSwipeVelocity = gestureState.vx;
    const horizontalSwipeVelocityThreshold = 0.7;
    const hasSwipedRight = horizontalSwipeVelocity < (horizontalSwipeVelocityThreshold * -1);
    if (hasSwipedRight) {
      this.handleSwipe();
    }
  }

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: this.handlePanResponderMove,
    onPanResponderGrant: () => this.activeIndexOnPanResponderGrant = this.state.activeIndex,
  })

  handleSwipe = () => {
    this.setState((prevState) => ({ activeIndex: prevState.activeIndex + 1 === images.length ? 0 : prevState.activeIndex + 1 }),
    () => this.horizontalScrollViewRef.scrollTo({ x: width * this.state.activeIndex }))
  }

  render() {
    return (
      <View>
        <View
          {...this.panResponder.panHandlers}
          style={{ position: "absolute", height: 200, width, zIndex: 999 }} />
        <Horizontal
          images={images}
          horizontalScrollViewRef={(ref) => this.horizontalScrollViewRef = ref}
        />
        <Vertical />
      </View>
    )
  }
}
