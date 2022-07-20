import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

import React, {useCallback, useEffect, useState} from 'react';

import {getProject} from '../../func/getApi';
import {styles} from '../../styles/AppBarAndList';
import Actions from '../../styles/Actions';

import {Indicator} from '../../styles/ActivityIndicator';

import {strings} from '../../Localization/Localization';
import axios from 'axios';

export function ContactScreen(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const api = 'albums';

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    console.log('onRefresh');
    axios
      .get(api)
      .then(result => {
        console.log('api', api, ':', result.data);
        setData(result?.data);
      })
      .catch(error => {
        console.log('Error at', api, ':', error);
      });
    setRefreshing(false);
  };


   const renderProject = useCallback(
    ({item}) => (
      <View style={styles.shell}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AlbumScreenDetails', item)}>
          <Text style={styles.nameTextStyle} numberOfLines={1}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );

  function albumList() {
 
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
          refreshing={refreshing}
          onRefresh={onRefresh}
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


  return (
    <View style={styles.container}>
      <Actions text={strings.albums} />
      {albumList(loading, data, props)}
    </View>
  );
}


