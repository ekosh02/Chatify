import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import {strings} from './../../Localization/Localization';

import {Colors} from '../../styles/colors';
import {DetailsAppBar} from '../../styles/DetailsAppBar';

export function UserScreenDetails(props) {
  const item = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
      <DetailsAppBar data={item} />
      <ScrollView>
        <View style={styles.accountContainerStyle}>
          <Text style={styles.accountTextStyle}>{strings.account}</Text>
          <Text style={styles.chindAccountTextStyle}>{item?.phone}</Text>
          <Text style={styles.bottomTextStyle}>{strings.phone}</Text>
          <View style={styles.line} />
          <Text style={styles.chindAccountTextStyle}>{item?.username}</Text>
          <Text style={styles.bottomTextStyle}>{strings.userName}</Text>
          <View style={styles.line} />
          <Text style={styles.chindAccountTextStyle}>{item?.email}</Text>
          <Text style={styles.bottomTextStyle}>{strings.email}</Text>
        </View>

        <View style={styles.lineWeight} />

        <View style={styles.accountContainerStyle}>
          <Text style={styles.accountTextStyle}>{strings.adderess}</Text>
          <Text style={styles.chindAccountTextStyle}>
            {item?.address?.street}
          </Text>
          <Text style={styles.bottomTextStyle}>{strings.street}</Text>
          <View style={styles.line} />
          <Text style={styles.chindAccountTextStyle}>
            {item?.address?.suite}
          </Text>
          <Text style={styles.bottomTextStyle}>{strings.suite}</Text>
          <View style={styles.line} />
          <Text style={styles.chindAccountTextStyle}>
            {item?.address?.city}
          </Text>
          <Text style={styles.bottomTextStyle}>{strings.city}</Text>
          <View style={styles.line} />
          <Text style={styles.chindAccountTextStyle}>
            {item?.address?.zipcode}
          </Text>
          <Text style={styles.bottomTextStyle}>{strings.zipcode}</Text>
        </View>

        <View style={styles.lineWeight} />

        <View style={styles.accountContainerStyle}>
          <Text style={styles.accountTextStyle}>{strings.compamy}</Text>
          <Text style={styles.chindAccountTextStyle}>
            {item?.company?.name}
          </Text>
          <Text style={styles.bottomTextStyle}>{strings.compamy}</Text>
          <View style={styles.line} />
          <Text style={styles.chindAccountTextStyle}>
            {item?.company?.catchPhrase}
          </Text>
          <Text style={styles.bottomTextStyle}>{strings.catchPhrase}</Text>
          <View style={styles.line} />
          <Text style={styles.chindAccountTextStyle}>{item?.company?.bs}</Text>
          <Text style={styles.bottomTextStyle}>{strings.bs}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  accountContainerStyle: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  accountTextStyle: {
    fontSize: 18,
    color: Colors.mainPurple,
    marginVertical: 5,
    marginBottom: 12,
  },
  childAccountContainerStyle: {
    marginHorizontal: 16,
  },
  chindAccountTextStyle: {
    marginHorizontal: 16,
    fontSize: 24,
    fontWeight: '400',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.blackText,
  },
  line: {
    borderBottomWidth: 1,
    marginVertical: 5,
    borderColor: Colors.whiteGray,
  },
  lineWeight: {
    borderBottomWidth: 16,
    borderColor: Colors.whiteGray,
  },
  bottomTextStyle: {
    color: Colors.darkGray,
    fontSize: 16,
  },
  rowView: {
    height: 48,
    backgroundColor: '#e1e1e3',
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 8,
  },

  rowViewActivity: {
    height: 48,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#7a54e3',
    borderRadius: 12,
    marginBottom: 8,
  },

  lanPressed: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#7a54e3',
    borderColor: 'gray',
    borderWidth: 2,
  },
});
