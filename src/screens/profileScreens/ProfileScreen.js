import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Colors } from '../../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Restart from 'react-native-restart';
import { GlobalContext } from '../../context/Context';
import Indicator from '../../styles/ActivityIndicator';

const { width , height} = Dimensions.get('screen');

export function ProfileScreen(props) {
  useEffect(() => { }, []);

  const { token } = useContext(GlobalContext);

  console.log('RENDER PROFILE ', token)

  const [loading, setLoading] = useState(false)

  const removeData = async () => {
    setLoading(true)
    try {
      await AsyncStorage.clear();
      setLoading(false)
      Restart.Restart();
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  return (
      <View>
      {loading ? (<Indicator />) : (<View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.appBar}></View>
        <View style={styles.profileContainer}>
          <View style={styles.testCon}></View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.profileInfoText}>
              Тут должно быть Имя
              {token?.lastName}
            </Text>
          </View>
        </View>
        <View style={styles.appBarRadius}></View>

        {token ? (
          <View style={styles.logoutContainer}>
            <TouchableOpacity onPress={removeData}>
              <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.logoutContainer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
              <Text style={styles.logoutText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        )}
        </View>
        
        )}

    </View>
  );
}

export const styles = StyleSheet.create({
  appBar: {
    backgroundColor: Colors.mainPurple,
    width: width,
    height: 200,
  },
  appBarRadius: {
    height: 40,
    top: -20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#f7f7f7',
  },
  profileContainer: {
    width: width,
    height: 200,
    position: 'absolute',
  },
  testCon: {
    left: '10%',
    top: '40%',
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: Colors.secondPurple,
  },
  profileInfoContainer: {
    position: 'absolute',
    right: '20%',
    top: '50%',
  },
  profileInfoText: {
    color: 'white',
    fontSize: 24,
  },
  listContainer: {
    backgroundColor: 'white',
    top: -20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 30,
    marginHorizontal: 16,
  },
  listIfnoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  listText: {
    fontSize: 20,
  },
  logoutContainer: {
    position: 'absolute',
    top: height-150,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  logoutText: {
    fontSize: 26,
    color: Colors.mainPurple,
  },
});
