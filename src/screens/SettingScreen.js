import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles/colors';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from '../../src/screens/userScreens/UserScreenDetails';

import Restart from 'react-native-restart';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {strings} from '../Localization/Localization';

import Indicator from './../styles/ActivityIndicator';

export function SettingScreen(props) {
  useEffect(() => {
    langOfApp();
  }, []);

  const [loading, setLoading] = useState(true);

  const langOfApp = async () => {
    const lang = await getData('lang');
    if (lang !== null) {
      strings.setLanguage(lang);
      console.log('lang if !null', lang);
      setLoading(false);
    } else {
      strings.setLanguage('kz');
    }
  };

  const getData = async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('error', error);
    }
  };

  const Selected = async value => {
    await AsyncStorage.setItem('lang', value);
    Restart.Restart();
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View>
          <Indicator />
        </View>
      ) : (
        <View style={styles.accountContainerStyle}>
          <Text style={styles.accountTextStyle}>{strings.language}</Text>

          <TouchableOpacity onPress={() => Selected('kz')}>
            <Text style={styles.chindAccountTextStyle}>Каз</Text>
            <View style={styles.line} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Selected('en')}>
            <Text style={styles.chindAccountTextStyle}>Англ</Text>
            <View style={styles.line} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Selected('ru')}>
            <Text style={styles.chindAccountTextStyle}>Русс</Text>
            <View style={styles.line} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
