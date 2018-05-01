import React, { Component } from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");



export default class Horizontal extends Component {
    render() {
        return (
            <View style={{ position: "absolute" }}>
                <ScrollView
                    ref={this.props.horizontalScrollViewRef}
                    pagingEnabled={true}
                    horizontal={true}>
                    {this.props.images.map((image, index) => (
                        <View key={index} style={{height: 200, width}}>
                            <Image
                                style={{ height: 200, width }}
                                resizeMode="cover"
                                source={image}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}