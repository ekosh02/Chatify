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

  const [info, setInfo] = useState('')

  console.log(info)

  const getData = async () => {

    try {
      await AsyncStorage.getItem('UserName').then(result => {
        if(result != null) {
          setInfo(result)
        }
      })
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
          <Text style={styles.profileInfoText}>Admin Admin</Text>
        </View>
      </View>
      <View style={styles.appBarRadius}></View>

      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
          <View style={styles.listIfnoContainer}>
            <Text style={styles.listText}>Create accoount</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Registration')}>
          <View style={styles.listIfnoContainer}>
            <Text style={styles.listText}>Registration accoount</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.listIfnoContainer}>
            <Text style={styles.listText}>Remove accoount</Text>
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
