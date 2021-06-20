import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { RoundedButton } from "../../components/RoundedButton"

export const Timing = ({ onChangeTime }) => {
    return (
        <>
            <TouchableOpacity style={styles.timingButton} onPress={() => onChangeTime(10)}>
                <RoundedButton
                    size={75}
                    title="10"
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.timingButton} onPress={() => onChangeTime(15)}>
                <RoundedButton
                    size={75}
                    title="15"
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.timingButton} onPress={() => onChangeTime(20)}>
                <RoundedButton
                    size={75}
                    title="20"
                />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
    }
})
