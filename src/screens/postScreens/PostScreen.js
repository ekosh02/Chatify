import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {getProject} from './../../func/getApi';

import Actions from './../../styles/Actions';
import {styles} from './../../styles/AppBarAndList';

import {Indicator} from './../../styles/ActivityIndicator';

import {strings} from '../../Localization/Localization';

export function PostScreen(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const api = 'posts';

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  return (
    <View style={styles.container}>
      <Actions text={strings.post} />

      {chatList(loading, data, props)}
    </View>
  );
}

function chatList(loading, data, props) {
  const renderProject = useCallback(
    ({item}) => (
      <View style={styles.shell}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('PostScreenDetails', item)
          }>
          <Text style={styles.nameTextStyle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.descriptionTextStyle} numberOfLines={1}>
            {item.body}
          </Text>
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
          maxToRenderPerBatch={15}
          initialNumToRender={15}
          data={data}
          renderItem={renderProject}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </View>
  );
}
