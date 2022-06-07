import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import Search from './../icon/search.svg';
import Theme from './../icon/theme.svg';
import ThreeDots from './../icon/threeDots.svg';
import { styles } from '../styles/styles';

export const Actions = () => {
  return (<View style={styles.actions}>
    <TouchableOpacity><Theme style={styles.paddingAction} /></TouchableOpacity>
    <TouchableOpacity><Search style={styles.paddingAction} /></TouchableOpacity>
    <TouchableOpacity><ThreeDots style={styles.paddingAction} /></TouchableOpacity>
  </View>);
};
