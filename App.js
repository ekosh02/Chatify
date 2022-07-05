import React, {useEffect} from 'react';
import axios from 'axios';
import MyStack from './src/bar/Stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {strings} from './src/Localization/Localization';

import ContextProvider from './src/context/Context'

export default function App() {
  useEffect(() => {
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
    langOfApp();
  }, []);

  const langOfApp = async () => {
    const lang = await AsyncStorage.getItem('lang');

    if (lang !== null) {
      strings.setLanguage(lang);
      axios.defaults.headers.locale = lang;
      console.log('lang ', lang);
    } else {
      console.log('else ', lang);
      strings.setLanguage('en');
      axios.defaults.headers.locale = 'en';
    }
  };

  return (
    <ContextProvider>
      <MyStack />
    </ContextProvider>
  );
}
