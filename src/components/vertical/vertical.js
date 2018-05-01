import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";

export default class Vertical extends Component {
    render() {
        return (
            <View>
                <ScrollView>
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
                </ScrollView>
            </View>
        )
    }
}