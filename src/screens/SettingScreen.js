import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles/colors';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from '../../src/screens/userScreens/UserScreenDetails';

import Restart from 'react-native-restart';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {strings} from '../Localization/Localization';

export function SettingScreen(props) {

  const Selected = async value => {
    await AsyncStorage.setItem('lang', value);
    Restart.Restart();
  };

  console.log(strings.language)
  

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.accountContainerStyle}>
          <Text style={styles.accountTextStyle}>{strings.language}</Text>

          <TouchableOpacity onPress={() => Selected('kz')}>
            <Text style={styles.chindAccountTextStyle}>Қазақша</Text>
            <View style={styles.line} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Selected('en')}>
            <Text style={styles.chindAccountTextStyle}>English</Text>
            <View style={styles.line} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Selected('ru')}>
            <Text style={styles.chindAccountTextStyle}>Русский</Text>
            <View style={styles.line} />
          </TouchableOpacity>
        </View>

    </SafeAreaView>
  );
}

