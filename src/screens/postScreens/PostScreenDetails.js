import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { getProject } from '../../func/getApi';
import { styles } from './../../styles/AppBarAndList'
import Indicator from '../../styles/ActivityIndicator';
import { DetailsAppBar } from '../../styles/DetailsAppBar';
import { paramsForUser } from '../../func/paramsForUser'

export function PostScreenDetails(props) {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    const item = props.route.params
    const api = 'users/' + item.userId

    useEffect(() => {
        getProject(setData, setLoading, api)
    }, []);

    let params = paramsForUser(data)

    return (
        <SafeAreaView>
            {loading ? (
                <Indicator />
            ) : (
                <View>
                    <DetailsAppBar data={data}/>
                    <View style={styles.shell}>
                        <Text></Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('UserScreenDetails', params)}>
                            <Text style={styles.nameTextStyle}>{item.title}</Text>
                            <Text style={styles.descriptionTextStyle}>{item.body}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}