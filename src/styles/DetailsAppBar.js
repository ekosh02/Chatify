import React from 'react';
import {
    Text,
    View, 
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Colors } from '../color/colors';
import ArrowBack from './../../icon/arrowBack';
import ThreeDotsBlackPurple from './../../icon/threeDotsBlackPurple.svg';

const { width } = Dimensions.get("screen")

import { useNavigation } from '@react-navigation/native'

export function DetailsAppBar(data) {
    
    const navigation = useNavigation()

    return <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
            <View style={styles.arrowBackStyle}>
                <ArrowBack />
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.threeDotsStyle}>
                <ThreeDotsBlackPurple />
            </View>
        </TouchableOpacity>
        <View style={styles.nameContainerStyle}>
            <Text style={styles.nameTextStyle} numberOfLines={1}>
                {data?.data?.name}
            </Text>
        </View>
    </View>;
}

export const styles = StyleSheet.create({

    appBar: {
        height: 70,
        borderBottomWidth: 1.5,
        borderColor: Colors.whiteGray,
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
        top: 2,
        left: 40,
        marginHorizontal: 16,
        marginVertical: 16,
        alignSelf: 'flex-start',
        maxWidth: width - 110,
        position: 'absolute',

    },
    nameTextStyle: {
        fontSize: 28,
        fontWeight: '600',
        color: Colors.blackText,
    },

})