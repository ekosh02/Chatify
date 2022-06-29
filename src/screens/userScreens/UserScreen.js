import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {getProject} from '../../func/getApi';

import Actions from '../../styles/Actions';
import {styles} from '../../styles/AppBarAndList';

import {Indicator} from '../../styles/ActivityIndicator';

import {strings} from '../../Localization/Localization';
import FlatListComponent from '../../func/FlatList';

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
          ListEmptyComponent={
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 24}}>Empty</Text>
            </View>
          }
          data={data}
          renderItem={({item}) => <RenderProject item={item} props={props} />}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </View>
  );
}
const RenderProject = ({item, props}) => {
  return (
    <View style={styles.shell}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('UserScreenDetails', item)}>
        <Text style={styles.nameTextStyle}>{item.name}</Text>
        <Text style={styles.descriptionTextStyle}>{item.company.bs}</Text>
      </TouchableOpacity>
    </View>
  );
};
