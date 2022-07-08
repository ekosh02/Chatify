import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Colors} from '../../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Restart from 'react-native-restart';
import {GlobalContext} from '../../context/Context';
import Indicator from '../../styles/ActivityIndicator';
import {strings} from '../../Localization/Localization';
import Actions from '../../styles/Actions';

const {width, height} = Dimensions.get('screen');

export function ProfileScreen(props) {
  useEffect(() => {}, []);

  const {token} = useContext(GlobalContext);

  const [loading, setLoading] = useState(false);

  const removeData = async () => {
    setLoading(true);
    try {
      await AsyncStorage.clear();
      setLoading(false);
      Restart.Restart();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Actions text={strings.prodile} />

      <View>
        {token ? (
          <ScrollView style={styles.scroll}>
            <View style={styles.accountContainerStyle}>
              <Text style={styles.chindAccountTextStyle}>
                {token.firstName}
              </Text>
              <Text style={styles.bottomTextStyle}>Name</Text>
              <View style={styles.line} />
              <Text style={styles.chindAccountTextStyle}>{token.lastName}</Text>
              <Text style={styles.bottomTextStyle}>Surname</Text>
              <View style={styles.line} />
              <Text style={styles.chindAccountTextStyle}>{token.username}</Text>
              <Text style={styles.bottomTextStyle}>username</Text>
              <View style={styles.line} />
            </View>
          </ScrollView>
        ) : (
          <ScrollView style={styles.scroll}>
            <View>
              <Text>Guest</Text>
            </View>
          </ScrollView>
        )}

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
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainPurple,
    flex: 1,
    justifyContent: 'flex-end',
  },
  scroll: {
    height: '88%',
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 0,
  },
  profileContainer: {
    position: 'absolute',
    top: '40%',
    left: 20,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileInfoText: {
    color: 'white',
    fontSize: 30,
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
    top: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  logoutText: {
    fontSize: 26,
    color: Colors.mainPurple,
  },
  textPos: {
    position: 'absolute',
    top: '40%',
    left: 20,
  },
  accountContainerStyle: {
    marginHorizontal: 16,
    marginVertical: 20,
  },
  accountTextStyle: {
    fontSize: 18,
    color: Colors.mainPurple,
    marginVertical: 5,
  },
  childAccountContainerStyle: {
    marginHorizontal: 16,
  },
  chindAccountTextStyle: {
    fontSize: 24,
    marginVertical: 5,
    fontWeight: '400',
    color: Colors.blackText,
  },

  line: {
    marginTop: 5,
    borderBottomWidth: 1,
    marginBottom: 5,
    borderColor: Colors.whiteGray,
  },

  bottomTextStyle: {
    color: Colors.darkGray,
    fontSize: 16,
  },
});
