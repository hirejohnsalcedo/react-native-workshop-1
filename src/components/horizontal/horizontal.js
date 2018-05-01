import React, { Component } from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const images = [
    require("../../assets/1.jpeg"),
    require("../../assets/2.jpeg"),
    require("../../assets/3.jpeg"),
]

export default class Horizontal extends Component {
    render() {
        return (
            <View>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}>
                    {images.map((image, index) => (
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