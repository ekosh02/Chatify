import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Colors } from '../styles/colors';
import React, { useEffect } from 'react';


export function SplashScreen(props) {

  useEffect(() => {
    navigationFunc()
  }, []);

  const navigationFunc = () => {
    setTimeout(() => {
      props.navigation.replace('BottomBar')
    }, 500);
  }

  return (<View style={styles.shell}><View style={styles.container}></View></View>);
};

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  container: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: Colors.mainPurple,
  },
})