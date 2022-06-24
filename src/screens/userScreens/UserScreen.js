import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {getProject} from '../../func/getApi';

import Actions from '../../styles/Actions';
import {styles} from '../../styles/AppBarAndList';

import {Indicator} from '../../styles/ActivityIndicator';
import {paramsForUser} from '../../func/paramsForUser';

import {strings} from '../../Localization/Localization';

export function UserScreen(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const api = 'users';

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  return (
    <View style={styles.container}>
      <Actions text={strings.user} />

      {chatList(loading, data, props)}
    </View>
  );
}

function chatList(loading, data, props) {
  return (
    <View style={styles.listContainer}>
      {loading ? (
        <Indicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <RenderProject item={item} props={props} />}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </View>
  );
}
const RenderProject = ({item, props}) => {
  let params = paramsForUser(item);

  return (
    <View style={styles.shell}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('UserScreenDetails', params)}>
        <Text style={styles.nameTextStyle}>{item.name}</Text>
        <Text style={styles.descriptionTextStyle}>{item.company.bs}</Text>
      </TouchableOpacity>
    </View>
  );
};
