import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  RefreshControl,
} from 'react-native';
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

  const onRefresh = () => {
    getProject(setData, setLoading, api);
  };

  function chatList() {
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
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={onRefresh}
              />
            }
            data={data}
            maxToRenderPerBatch={15}
            initialNumToRender={15}
            j
            renderItem={renderProject}
            contentContainerStyle={styles.contentContainerStyle}
          />
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Actions text={strings.user} />
      {chatList()}
    </View>
  );
}
