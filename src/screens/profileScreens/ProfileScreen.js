import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('screen');

export function ProfileScreen(props) {
  useEffect(() => {
    getData()
  }, []);

  const [data, setData] = useState('')


  const getData = async () => {

    try {
      await AsyncStorage.getItem('UserName').then(result => {
        if(result != null) {
          const parse = JSON.parse(result)
          setData(parse)
          console.log('token', parse)
        }else{
          console.log('token is ', result)
        }
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  const removeData  = async () => {
    try {
      await AsyncStorage.clear()
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: '#f7f7f7'}}>
      <View style={styles.appBar}></View>
      <View style={styles.profileContainer}>
        <View style={styles.testCon}></View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileInfoText}>{data.firstName} {data.lastName}</Text>
        </View>
      </View>
      <View style={styles.appBarRadius}></View>

      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
          <View style={styles.listIfnoContainer}>
            <Text style={styles.listText}>Auth accoount</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Registration')}>
          <View style={styles.listIfnoContainer}>
            <Text style={styles.listText}>Registration accoount</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeData}>
          <View style={styles.listIfnoContainer}>
            <Text style={styles.listText}>Exit accoount</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#f7f7f7',
    // backgroundColor: 'gray',
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
});
