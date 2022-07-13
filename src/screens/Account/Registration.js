import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Keyboard,
} from 'react-native';

import ArrowBack from './../../../icon/arrowBack';
import {styles} from '../../styles/acoountStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Restart from 'react-native-restart';
import {GlobalContext} from '../../context/Context';
import Indicator from '../../styles/ActivityIndicator';
import {strings} from '../../Localization/Localization';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import { KeyboardAwareView } from 'react-native-keyboard-aware-view'

export function Registration(props) {
  const PopUp = msg =>
    Alert.alert('Errors', msg, [
      {
        text: 'OK',
        style: 'default',
      },
    ]);

  const {setToken} = useContext(GlobalContext);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const [loading, setLoading] = useState(false);

  const authReg = async () => {
    setLoading(true);
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
      setLoading(false);
    } else if (
      firstName.length < 4 ||
      lastName.length < 4 ||
      username.length < 4 ||
      password.length < 4 ||
      confirmPassword.length < 4
    ) {
      PopUp('Пароль или логин не может быть меньше чем 5 символов');
      console.log('len < 4 params: ', params);
      setLoading(false);
    } else if (password != confirmPassword) {
      PopUp('Пароли не совпадают');
      setLoading(false);
    } else {
      try {
        const jsonParams = JSON.stringify(params);

        await AsyncStorage.setItem('token', jsonParams);
        setToken(params);
        setLoading(false);
        props.navigation.replace('BottomBar');
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const keyboardVerticalOffset = Platform.OS === 'android' ? 0 : 0;

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <Indicator />
      ) : (
        <View>
          <View style={styles.appBar}>
            <TouchableOpacity onPress={() => props.navigation?.goBack()}>
              <View style={styles.arrowBackStyle}>
                <ArrowBack />
              </View>
            </TouchableOpacity>
            <View style={styles.nameContainerStyle}>
              <Text style={styles.nameTextStyle} numberOfLines={1}>
                {strings.registration}
              </Text>
            </View>
          </View>
          <ScrollView>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{flex: 1}}>
              <View style={styles.formContainer}>
                <TextInput
                  onChangeText={text => setFirstName(text)}
                  style={styles.textInput}
                  placeholder={strings.firstName}></TextInput>
                <TextInput
                  onChangeText={text => setLastName(text)}
                  style={styles.textInput}
                  placeholder={strings.lastName}></TextInput>
                <TextInput
                  onChangeText={text => setUsername(text)}
                  style={styles.textInput}
                  placeholder={strings.username}></TextInput>
                <TextInput
                  onChangeText={text => setPassword(text)}
                  style={styles.textInput}
                  placeholder={strings.password}></TextInput>
                <TextInput
                  onChangeText={text => setConfirmPassword(text)}
                  style={styles.textInput}
                  placeholder={strings.confirmPassword}></TextInput>

                {/* <TextInput
                  style={styles.textInput}
                  placeholder={strings.confirmPassword}></TextInput>
                <TextInput
                  style={styles.textInput}
                  placeholder={strings.confirmPassword}></TextInput>
                <TextInput
                  style={styles.textInput}
                  placeholder={strings.confirmPassword}></TextInput> */}
                <TextInput
                  style={styles.textInput}
                  placeholder={strings.confirmPassword}></TextInput>
                <TextInput
                  style={styles.textInput}
                  placeholder={strings.confirmPassword}></TextInput>
                <TextInput
                  style={styles.textInput}
                  placeholder={strings.confirmPassword}></TextInput>
                <TextInput
                  style={styles.textInput}
                  placeholder={strings.confirmPassword}></TextInput>
                <TextInput
                  style={styles.textInput}
                  placeholder={'ENDDDDD'}></TextInput>

              </View>

              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.pressContainer}>
                  <Text style={styles.textPress}>{strings.registration}</Text>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}
