import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import {strings} from './../../Localization/Localization'

import { Colors } from '../../styles/colors';
import { DetailsAppBar } from '../../styles/DetailsAppBar';

export function UserScreenDetails(props) {

    const accountText = strings.account;
    const phoneText = strings.phone
    const userNameText = strings.userName
    const emailText = strings.email

    const addressText = strings.adderess
    const streetText = strings.street
    const suiteText = strings.suite
    const cityText = strings.city
    const zipcodeText = strings.zipcode

    const companyText = strings.compamy
    const companyNameText = strings.compamy
    const bsText = strings.bs
    const catchPhraseText = strings.catchPhrase

    const item = props.route.params

    return (
        <SafeAreaView style={styles.container}>

            <DetailsAppBar data={item}/>
            <ScrollView>

                <View style={styles.accountContainerStyle}>
                    <Text style={styles.accountTextStyle}>{accountText}</Text>
                    <Text style={styles.chindAccountTextStyle}>{item.phone}</Text>
                    <Text style={styles.bottomTextStyle}>{phoneText}</Text>
                    <View style={styles.line} />
                    <Text style={styles.chindAccountTextStyle}>{item.username}</Text>
                    <Text style={styles.bottomTextStyle}>{userNameText}</Text>
                    <View style={styles.line} />
                    <Text style={styles.chindAccountTextStyle}>{item.email}</Text>
                    <Text style={styles.bottomTextStyle}>{emailText}</Text>
                </View>

                <View style={styles.lineWeight} />

                <View style={styles.accountContainerStyle}>
                    <Text style={styles.accountTextStyle}>{addressText}</Text>
                    <Text style={styles.chindAccountTextStyle}>{item.street}</Text>
                    <Text style={styles.bottomTextStyle}>{streetText}</Text>
                    <View style={styles.line} />
                    <Text style={styles.chindAccountTextStyle}>{item.suite}</Text>
                    <Text style={styles.bottomTextStyle}>{suiteText}</Text>
                    <View style={styles.line} />
                    <Text style={styles.chindAccountTextStyle}>{item.city}</Text>
                    <Text style={styles.bottomTextStyle}>{cityText}</Text>
                    <View style={styles.line} />
                    <Text style={styles.chindAccountTextStyle}>{item.zipcode}</Text>
                    <Text style={styles.bottomTextStyle}>{zipcodeText}</Text>
                </View>

                <View style={styles.lineWeight} />

                <View style={styles.accountContainerStyle}>
                    <Text style={styles.accountTextStyle}>{companyText}</Text>
                    <Text style={styles.chindAccountTextStyle}>{item.companyName}</Text>
                    <Text style={styles.bottomTextStyle}>{companyNameText}</Text>
                    <View style={styles.line} />
                    <Text style={styles.chindAccountTextStyle}>{item.catchPhrase}</Text>
                    <Text style={styles.bottomTextStyle}>{catchPhraseText}</Text>
                    <View style={styles.line} />
                    <Text style={styles.chindAccountTextStyle}>{item.bs}</Text>
                    <Text style={styles.bottomTextStyle}>{bsText}</Text>
                </View>

            </ScrollView>

        </SafeAreaView>

    );
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    },
    bottomTextStyle: {
        color: Colors.darkGray,
        fontSize: 16,
    }

})


