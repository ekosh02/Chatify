
import React, {useEffect} from 'react';
import axios from 'axios';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MyStack from './src/stack/Stack';
export const Tab = createBottomTabNavigator();


export default function App(props) {

  useEffect(() => {
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
  }, []);

  return (
    <MyStack/>
  );
};



