import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../styles/colors';
import React, {useContext, useEffect} from 'react';

import Icon from './../../icon/splash.svg';

export function SplashScreen(props) {
  console.log('REDNER SplashScreen')

  useEffect(() => {
    navigationFunc();
  }, []);

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
