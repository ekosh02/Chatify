import React, {useState} from 'react';
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

  function authFunc() {
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
      console.log('params: ', params);
    }
  }

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
