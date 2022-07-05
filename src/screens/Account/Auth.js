import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';

import ArrowBack from './../../../icon/arrowBack';
import {styles} from '../../styles/acoountStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext } from '../../context/Context';
import Restart from 'react-native-restart';

const text = 'Auth';

export function Auth(props) {
  const PopUp = msg =>
    Alert.alert('Errors', msg, [
      {
        text: 'OK',
        style: 'default',
      },
    ]);

  const [username, setusername] = useState(null);
  const [password, setPassword] = useState(null);


  const {setToken} = useContext(GlobalContext);

  const authFunc = async () => {
    if (password == null || username == null) {
      PopUp('Пароль или логин не может быть пустым');
      console.log('params: ', password, username);
    } else if (password.length < 5 || username.length < 5) {
      PopUp('Пароль или логин не может быть меньше чем 5 символов');
      console.log('params: ', password, username);
    } else {
      let params = {
        username: username,
        password: password,
      };
      console.log('auth params: ', params);
      await AsyncStorage.getItem('token').then(result => {
        if (result != null) {
          const parse = JSON.parse(result);
          setToken(parse)
          console.log('res ', parse)
          
        } else {
          console.log('auth is ', result);
        }
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => props.navigation?.goBack()}>
          <View style={styles.arrowBackStyle}>
            <ArrowBack />
          </View>
        </TouchableOpacity>
        <View style={styles.nameContainerStyle}>
          <Text style={styles.nameTextStyle} numberOfLines={1}>
            {text}
          </Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          onChangeText={setusername}
          style={styles.textInput}
          placeholder={'username'}></TextInput>
        <TextInput
          onChangeText={setPassword}
          style={styles.textInput}
          placeholder={'password'}></TextInput>
      </View>

      <TouchableOpacity onPress={authFunc}>
        <View style={styles.pressContainer}>
          <Text style={styles.textPress}>Auth</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
