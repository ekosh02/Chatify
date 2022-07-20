import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles/colors';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import ArrowBack from './../../icon/arrowBack.svg';

import {styles} from '../../src/screens/userScreens/UserScreenDetails';

import Restart from 'react-native-restart';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {strings} from '../Localization/Localization';

import CheckIcon from './../../icon/check.svg';
import {ScrollView} from 'react-native-gesture-handler';

export function SettingScreen(props) {
  const [count, setCount] = useState(0);
  const Selected = async value => {
   await AsyncStorage.setItem('lang', value);
    Restart.Restart();
  };

  useEffect(() => {
    getLang();
  }, []);

  const getLang = async () => {
    const item = await AsyncStorage.getItem('lang');
    console.log('lang', item);
    if (item == 'en') {
      setCount(0);
    } else if (item == 'kz') {
      setCount(1);
    } else if (item == 'ru') {
      setCount(2);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20, marginLeft: 16}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <ArrowBack />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.accountContainerStyle}>
          <Text style={styles.accountTextStyle}>{strings.language}</Text>

          <TouchableOpacity onPress={() => Selected('kz')}>
            <View style={count == 1 ? styles.rowViewActivity : styles.rowView}>
              <Text style={styles.chindAccountTextStyle}>
                Қазақша {count == 1 ? <CheckIcon /> : ''}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Selected('en')}>
            <View style={count == 0 ? styles.rowViewActivity : styles.rowView}>
              <Text style={styles.chindAccountTextStyle}>
                English {count == 0 ? <CheckIcon /> : ''}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Selected('ru')}>
            <View style={count == 2 ? styles.rowViewActivity : styles.rowView}>
              <Text style={styles.chindAccountTextStyle}>
                Русский {count == 2 ? <CheckIcon /> : ''}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}