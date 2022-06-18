import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import React, { memo } from 'react'

import { Indicator } from '../../styles/ActivityIndicator';
import { styles } from '../../styles/AppBarAndList';
import { paramsForUser } from '../../func/paramsForUser';

function chatList(loading, data, props) {
  return <View style={styles.listContainer}>
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
  </View>;
}
const RenderProject = ({ item, props }) => {
  
  let params = paramsForUser(item);

  return (
    <View style={styles.shell}>
      <TouchableOpacity onPress={() => props.navigation.navigate('UserScreenDetails', params)}>
        <Text style={styles.nameTextStyle}>{item.name}</Text>
        <Text style={styles.descriptionTextStyle}>{item.company.bs}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default chatList