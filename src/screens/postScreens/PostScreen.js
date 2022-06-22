import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react'

import { getProject } from './../../func/getApi'

import Actions from './../../styles/Actions'
import { styles } from './../../styles/AppBarAndList'

import {Indicator} from './../../styles/ActivityIndicator'

export function PostScreen(props) {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const api = 'posts'

  useEffect(() => {
    getProject(setData, setLoading, api)
  }, []);

  return (
    <View style={styles.container}>
      <Actions />
      
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
        renderItem={({ item }) => (
          <RenderProject item={item} props={props} />
        )}
        contentContainerStyle={styles.contentContainerStyle} />
    )}
  </View>);
}
const RenderProject = ({ item, props }) => {

  let params = {
    title: item.title,
    body: item.body,
    userId: item.userId,
    id: item.id
  };

  return (
    <View style={styles.shell}>
      <TouchableOpacity onPress={() => props.navigation.navigate('PostScreenDetails', params)}>
        <Text style={styles.nameTextStyle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.descriptionTextStyle} numberOfLines={1}>{item.body}</Text>
      </TouchableOpacity>
    </View>
  );
};



