import React from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { Colors } from "../styles/colors";
import ArrowBack from './../../icon/arrowBack.svg'


export function Search(props) {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerInput}>

            <TouchableOpacity style={styles.arrowBackStyle} onPress={() => props?.navigation?.goBack()}>
                <ArrowBack />
            </TouchableOpacity>

            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInputStyle}></TextInput>
            </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    textInputContainer: {
        top: '-20%',
        left: '10%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.mainPurple,
        height: 32,
        width: '85%',
    },

    containerInput: {
        height: 64,
    },
    textInputStyle: {
        paddingVertical: 6,
        paddingHorizontal: 13,
    },

    arrowBackStyle: {
      left: 13,
      top: '23%',
      justifyContent: 'center'
    }

})