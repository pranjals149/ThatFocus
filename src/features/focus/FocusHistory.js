import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'

import { fontSizes, spacing } from "../../utils/sizes"
import { RoundedButton } from "../../components/RoundedButton"

const HistoryItem = ({ item, index }) => {
    return (
        <Text style={styles.historyItem(item.status)}>
            {item.subject}
        </Text>
    )
}

export const FocusHistory = ({ focusHistory, onClear }) => {
    const clearHistory = () => {
        onClear();
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                {!!focusHistory.length &&
                    <>
                        <Text style={styles.title}>
                            Things we've focused on
                        </Text>


                        <FlatList
                            style={{ flex: 1 }}
                            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                            data={focusHistory}
                            renderItem={HistoryItem}
                        />

                        <View style={styles.clearContainer}>
                            <TouchableOpacity onPress={() => onClear()}>
                                <RoundedButton
                                    size={75}
                                    title="clear"
                                />
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </SafeAreaView>

        </>
    )
}

const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status > 1 ? "red" : "green",
        fontSize: fontSizes.md
    }),
    title: {
        color: "white",
        fontSize: fontSizes.ls
    },
    clearContainer: {
        alignItems: "center",
        padding: spacing.md
    }
})
