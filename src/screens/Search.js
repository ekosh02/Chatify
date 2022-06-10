import React from "react";
import {
    View,
    StyleSheet,
    SafeAreaView, 
    TextInput
} from 'react-native'
import { Colors } from "../color/colors";

export function Search() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInputStyle}></TextInput>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textInputContainer: {
        marginHorizontal: 16,
        borderRadius: 13,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Colors.mainPurple
    },
    textInputStyle: {
        paddingHorizontal: 13,
        paddingVertical: 16,
    },

})