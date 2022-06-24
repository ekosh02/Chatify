import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

import React, {useEffect, useState} from 'react';

import {getProject} from '../../func/getApi';
import {styles} from '../../styles/AppBarAndList';
import Actions from '../../styles/Actions';

import {Indicator} from '../../styles/ActivityIndicator';

import {strings} from '../../Localization/Localization';

export function ContactScreen(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const api = 'albums';

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  return (
    <View style={styles.container}>
      <Actions text={strings.albums}/>
      {albumList(loading, data, props)}
    </View>
  );
}

function albumList(loading, data, props) {
  return (
    <View style={styles.listContainer}>
      {loading ? (
        <Indicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <RenderProject item={item} props={props} />
          )}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </View>
  );
}

const RenderProject = ({index, item, props}) => {
  let params = {
    id: item.id,
    title: item.title,
    userId: item.userId,
  };

  return (
    <View style={styles.shell}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('AlbumScreenDetails', params)}>
        <Text style={styles.nameTextStyle} numberOfLines={1}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
