import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...props
}) => {
    return (
        <View style={[styles(size).radius, style]}>
            <Text
                style={[styles(size).text, textStyle]}
            >
                {props.title}
            </Text>
        </View>
    )
}

const styles = (size) => StyleSheet.create({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#fff",
        borderWidth: 2,
    },
    text: {
        color: "#fff",
        fontSize: size / 3,
    }
})