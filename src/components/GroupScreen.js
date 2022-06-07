import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { AppBar } from '../tab/AppBar';


import { Actions } from '../tab/Actions';


export function GroupScreen(props) {
  return (
    <View><AppBar/><Actions/></View>
  );
}
