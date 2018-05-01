import React, { Component } from "react";
import { ScrollView, View, Text, Animated } from "react-native";

export default class Vertical extends Component {
    render() {
        return (
            <View>
                <Animated.ScrollView
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.props.scaleAnimatedValue } } }],
                        { useNativeDriver: true },
                    )}
                >
                    <View style={{ height: 200 }} />
                    <View style={{ backgroundColor: "rgb(255, 50, 50)" }}>
                        {Array.from({ length: 20 }).map((_, index) => (
                            <View key={index}>
                                <Text>
                                    create mode 100644 src/assets/1.jpeg
                                    create mode 100644 src/assets/2.jpeg
                                    create mode 100644 src/assets/3.jpeg
                                    create mode 100644 src/components/horizontal/horizontal.js
                            </Text>
                            </View>
                        ))}
                    </View>
                </Animated.ScrollView>
            </View>
        )
    }
}