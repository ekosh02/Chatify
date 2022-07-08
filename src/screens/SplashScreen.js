import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../styles/colors';
import React, {useContext, useEffect} from 'react';

import Icon from './../../icon/splash.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext } from '../context/Context';

export function SplashScreen(props) {

  useEffect(() => {
    navigationFunc()
    getUser()
  }, []);

  const { setToken } = useContext(GlobalContext)

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem('token'))
      console.log('token', userData)
      setToken(userData)
    
    } catch (error) {
      console.log(error);

    }
  };

  const navigationFunc = async () => {
    setTimeout(() => {
      props.navigation.replace('BottomBar');
    }, 500);
  };

  return (
    <View style={styles.shell}>
      <Icon width={200} height={200} />
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
