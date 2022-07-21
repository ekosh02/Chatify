import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Colors} from '../styles/colors';
import ArrowBack from './../../icon/arrowBack.svg';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const {height, width} = Dimensions.get('screen');

import {Com1} from './Com1';
import {Com2} from './Com2';
import {Com3} from './Com3';

const Tab = createMaterialTopTabNavigator();

let stacks = [
  {name: 'com1', component: Com1},
  {name: 'com2', component: Com2},
  {name: 'com3', component: Com3},
];

export function Search(props) {
  console.log('height', height);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <TouchableOpacity
          style={styles.arrowBackStyle}
          onPress={() => props?.navigation?.goBack()}>
          <ArrowBack />
        </TouchableOpacity>

        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>
      </View>

      <View style={{ height: height}}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {backgroundColor: 'red', height: 48},
          }}
          initialRouteName="com1">
          {stacks.map((stack, key) => (
            <Tab.Screen
              key={key}
              name={stack.name}
              component={stack.component}
            />
          ))}
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputContainer: {
    top: '-20%',
    left: '10%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.mainPurple,
    height: 32,
    width: '85%',
  },

  containerInput: {
    height: 54,
    width: width,
    backgroundColor: 'gray',
  },
  textInputStyle: {
    paddingVertical: 6,
    paddingHorizontal: 13,
  },

  arrowBackStyle: {
    left: 13,
    top: '23%',
    justifyContent: 'center',
  },
});
