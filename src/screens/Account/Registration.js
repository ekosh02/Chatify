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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Restart from 'react-native-restart';

const text = 'Registration';

export function Registration(props) {
  const PopUp = msg =>
    Alert.alert('Errors', msg, [
      {
        text: 'OK',
        style: 'default',
      },
    ]);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const authReg = async () => {
    let params = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };

    if (
      firstName == null ||
      lastName == null ||
      username == null ||
      password == null ||
      confirmPassword == null
    ) {
      PopUp('Заполнение не может быть пустым');
      console.log('params is null: ', params);
    } else if (
      firstName.length < 4 ||
      lastName.length < 4 ||
      username.length < 4 ||
      password.length < 4 ||
      confirmPassword.length < 4
    ) {
      PopUp('Пароль или логин не может быть меньше чем 5 символов');
      console.log('len < 4 params: ', params);
    } else {
      console.log('else params: ', params);
      try {
        const jsonParams = JSON.stringify(params)
        console.log(jsonParams)
        console.log(params)
        await AsyncStorage.setItem('token', jsonParams);

        Restart.Restart()
      } catch (error) {
        console.log(error);
      }
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
          onChangeText={(text) => setFirstName(text)}
          style={styles.textInput}
          placeholder={'first name'}></TextInput>
        <TextInput
          onChangeText={(text) => setLastName(text)}
          style={styles.textInput}
          placeholder={'last name'}></TextInput>
        <TextInput
          onChangeText={(text) => setUsername(text)}
          style={styles.textInput}
          placeholder={'username'}></TextInput>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
          placeholder={'password'}></TextInput>
        <TextInput
          onChangeText={(text ) => setConfirmPassword(text)}
          style={styles.textInput}
          placeholder={'password'}></TextInput>
      </View>

      <TouchableOpacity onPress={authReg}>
        <View style={styles.pressContainer}>
          <Text style={styles.textPress}>Registration</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
