import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import MyStack from './src/bar/Stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {strings} from './src/Localization/Localization';

import ContextProvider from './src/context/Context';

import messanging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export default function App() {
  const getPushData = async message => {
  
    PushNotification.localNotification({
      message: message.notification.body,
      title: message.notification.title,
    })
    console.log('message ', message);
  };

    
  messanging().onMessage(getPushData);

  messanging().setBackgroundMessageHandler(getPushData)

  useEffect(() => {
    getToken()
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
    langOfApp();
  },[]) 

  const getToken = async () => {
    const token = messanging().getToken();
    console.log('token', token);
  };


  


  const langOfApp = async () => {
    const lang = await AsyncStorage.getItem('lang');

    if (lang !== null) {
      strings.setLanguage(lang);
      console.log('lang ', lang);
    } else {
      strings.setLanguage('en');
    }
  };

  return (
    <ContextProvider>
      <MyStack />
    </ContextProvider>
  );
}
