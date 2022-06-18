import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import { Indicator } from './../../styles/ActivityIndicator';
import { styles } from './../../styles/AppBarAndList';

export function chatList(loading, data, props) {

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
