import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView
} from 'react-native';
import React, { memo } from 'react'

import ThreeDots from './../../icon/threeDots.svg';
import Search from './../../icon/search.svg';
import Theme from './../../icon/theme.svg';

import { useNavigation } from '@react-navigation/native'

function Actions() {

  const navigation = useNavigation()

  return <SafeAreaView style={styles.actions}>
    <TouchableOpacity>
      <Theme style={styles.paddingAction} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation?.navigate('Search')}>
      <Search style={styles.paddingAction} />
    </TouchableOpacity>

    <TouchableOpacity>
      <ThreeDots style={styles.paddingAction} />
    </TouchableOpacity>
  </SafeAreaView>;
}

export const styles = StyleSheet.create({
  paddingAction: {
    paddingHorizontal: 20,
  },
  actions: {
    position: 'absolute',
    right: 13,
    top: '4%',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 13,
  },
})

export default memo(Actions);