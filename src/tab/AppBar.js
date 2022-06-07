import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

import { Colors } from '../color/colors'

// import ThreeDot from './../icon/threeDot.svg'
// import Search from './../icon/search.svg'
// import Theme from './../icon/theme.svg'

const {width, height} = Dimensions.get('screen');

export function  AppBar () {
  return (<View style={styles.container}></View>);
};

const styles = StyleSheet.create({
  container: {
    height: 165,
    width: width,
    backgroundColor: Colors.mainPurple,
   
  },
})