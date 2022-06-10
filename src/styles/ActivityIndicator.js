import React from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
import { Colors } from "../color/colors";

const { width, height } = Dimensions.get('screen');
export function Indicator() {
  return (<View><ActivityIndicator style={{ marginTop: width / 1.5 }}
    color={Colors.mainPurple} /></View>)
}

export default Indicator
