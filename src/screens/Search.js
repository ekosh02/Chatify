import React from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { Colors } from "../color/colors";
import ArrowBack from './../../icon/arrowBack.svg'


export function Search(props) {

    console.log('Render Search')

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.arrowBackStyle} onPress={() => props?.navigation?.goBack()}>
                <ArrowBack />
            </TouchableOpacity>

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
        top: 64,
        position: 'absolute',
        right: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.mainPurple,
        height: 32,
        width: '85%',
    },
    textInputStyle: {
        paddingVertical: 6,
        paddingHorizontal: 13,
    },
    arrowBackStyle: {
        position: 'absolute',
        top: 69,
        left: 16,
    }

})