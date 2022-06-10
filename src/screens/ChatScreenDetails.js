import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

import { Colors } from '../color/colors';

import ArrowBack from './../icon/arrowBack.svg'
import ThreeDotsBlack from './../icon/threeDotsBlack.svg'

export function ChatScreenDetails(props) {
    const accountText = 'Account'

    const item = props.route.params

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <View style={styles.arrowBackStyle}>
                        <ArrowBack />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.threeDotsStyle}>
                        <ThreeDotsBlack />
                    </View>
                </TouchableOpacity>
                <View style={styles.nameContainerStyle}>
                    <Text style={styles.nameTextStyle}>
                        {item.name}
                    </Text>
                </View>
            </View>

            <View style={styles.accountContainerStyle}>
                <Text style={styles.accountTextStyle}>{accountText}</Text>
                <Text style={styles.chindAccountTextStyle}>{item.phone}</Text>
                <View style={styles.line} />
                <Text style={styles.chindAccountTextStyle}>{item.username}</Text>
                <View style={styles.line} />
                <Text style={styles.chindAccountTextStyle}>{item.email}</Text>
            </View>

            <View style={styles.lineWeight} />

        </SafeAreaView>
    );
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    appBar: {
        height: 128,
        borderBottomWidth: 0.4,
        borderColor: Colors.darkGray,
        marginHorizontal: 0,
    },
    arrowBackStyle: {
        height: 28,
        width: 28,
        justifyContent: 'center',
        alignItems: 'center',
        left: 16,
        top: 20,
        position: 'absolute',
    },
    threeDotsStyle: {
        height: 28,
        width: 28,
        justifyContent: 'center',
        alignItems: 'center',
        right: 16,
        top: 20,
        position: 'absolute',
    },
    nameContainerStyle: {
        top: 64,
        marginHorizontal: 16,
        marginVertical: 16,
        backgroundColor: 'white',
        alignSelf: 'flex-start'
    },
    nameTextStyle: {
        fontSize: 28,
        fontWeight: '600',
        color: Colors.blackText,
    },
    accountContainerStyle: {
        marginHorizontal: 16,
        marginVertical: 20,
    },
    accountTextStyle: {
        fontSize: 18,
        color: Colors.mainPurple,
        marginVertical: 5,
    },
    childAccountContainerStyle: {
        marginHorizontal: 16,
    },
    chindAccountTextStyle: {
        fontSize: 24,
        marginVertical: 5,
        fontWeight: '400',
        color: Colors.blackText,
    },
    line: {
        borderBottomWidth: 1,
        marginVertical: 5,
        borderColor: Colors.whiteGray,
    },
    lineWeight: {
        borderBottomWidth: 16,
        borderColor: Colors.whiteGray,
    }
})