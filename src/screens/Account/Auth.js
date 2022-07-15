import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';

import ArrowBack from './../../../icon/arrowBack';
import {styles} from '../../styles/acoountStyles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from '../../context/Context';
import Restart from 'react-native-restart';
import Indicator from '../../styles/ActivityIndicator';
import {strings} from './../../Localization/Localization';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
  const [loading, setLoading] = useState(false);

  const {setToken} = useContext(GlobalContext);

  const authFunc = async () => {
    setLoading(true);
    if (password == null && username == null) {
      PopUp('Пароль или логин не может быть пустым');
      console.log('params: ', password, username);

      setLoading(false);
    } else if (password.length < 5 || username.length < 5) {
      PopUp('Пароль или логин не может быть меньше чем 5 символов');
      console.log('params: ', password, username);
      setLoading(false);
    } else {
      let params = {
        username: username,
        password: password,
      };
      console.log('params: ', params);
      await AsyncStorage.getItem('token').then(result => {
        if (result != null) {
          const parse = JSON.parse(result);
          console.log('auth ', parse);
          setToken(parse);
          setLoading(false);
          props.navigation.replace('BottomBar');
        } else {
          console.log('auth is ', result);
          setLoading(false);
        }
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <Indicator />
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.appBar}>
            <TouchableOpacity onPress={() => props.navigation?.goBack()}>
              <View style={styles.arrowBackStyle}>
                <ArrowBack />
              </View>
            </TouchableOpacity>
            <View style={styles.nameContainerStyle}>
              <Text style={styles.nameTextStyle} numberOfLines={1}>
                {strings.auth}
              </Text>
            </View>
          </View>
          <KeyboardAwareScrollView>
            <View style={styles.formContainer}>
              <TextInput
                onChangeText={setusername}
                style={styles.textInput}
                placeholder={strings.username}></TextInput>
              <TextInput
                onChangeText={setPassword}
                style={styles.textInput}
                placeholder={strings.password}></TextInput>
            </View>

            <TouchableOpacity onPress={authFunc}>
              <View style={styles.pressContainer}>
                <Text style={styles.textPress}>{strings.auth}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('Registration')}>
              <View style={styles.pressContainer2}>
                <Text style={styles.textPress2}>{strings.ifNUllAcc}</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}
