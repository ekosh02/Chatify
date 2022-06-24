import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {memo} from 'react';

import ThreeDots from './../../icon/threeDots.svg';
import Search from './../../icon/search.svg';
import Theme from './../../icon/theme.svg';

import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

function Actions(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.actions}>
      <View style={styles.textPos}>
        <Text style={{fontSize: 24, color: 'white'}}>{props.text}</Text>
      </View>

      <View style={styles.actionsPos}>
        <TouchableOpacity>
          <Theme style={styles.paddingAction} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation?.navigate('Search')}>
          <Search style={styles.paddingAction} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation?.navigate('SettingScreen')}>
          <ThreeDots style={styles.paddingAction} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  paddingAction: {
    paddingHorizontal: 20,
  },
  actions: {
    position: 'absolute',
    top: '4%',

    paddingVertical: 5,
    paddingHorizontal: 13,
    width: width,
    height: '7%',
  },
  actionsPos: {
    flexDirection: 'row',
    right: 13,
    position: 'absolute',
    top: '50%',
  },
  textPos: {
    position: 'absolute',
    top: '40%',
    left: 20,
  },
});

export default memo(Actions);
