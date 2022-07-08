import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {getProject} from '../../func/getApi';

import Actions from '../../styles/Actions';
import {styles} from '../../styles/AppBarAndList';

import {Indicator} from '../../styles/ActivityIndicator';

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
  const renderProject = useCallback(
    ({item}) => (
      <View style={styles.shell}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('UserScreenDetails', item)}>
          <Text style={styles.nameTextStyle}>{item.name}</Text>
          <Text style={styles.descriptionTextStyle}>{item.company.bs}</Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );

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
          maxToRenderPerBatch={15}
          initialNumToRender={15}
          renderItem={renderProject}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </View>
  );
}
