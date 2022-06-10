import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import ThreeDots from './../icon/threeDots.svg';
import Search from './../icon/search.svg';
import Theme from './../icon/theme.svg';

export function Actions(props) {
  return <View style={styles.actions}>
    <TouchableOpacity><Theme style={styles.paddingAction} /></TouchableOpacity>
    <TouchableOpacity onPress={() => props?.navigation?.navigate('Search')}><Search style={styles.paddingAction} /></TouchableOpacity>
    <TouchableOpacity><ThreeDots style={styles.paddingAction} /></TouchableOpacity>
  </View>;
}

export const styles = StyleSheet.create({
  paddingAction: {
    paddingHorizontal: 20,
  },
  actions: {
    position: 'absolute',
    right: 3,
    top: 64,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 13,
  },
})