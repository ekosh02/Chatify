import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageEditor,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Indicator} from './../styles/ActivityIndicator';
import {getProject} from './../func/getApi';

const {height, width} = Dimensions.get('screen');

export function Com1(props) {
  const api = 'users';

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const renderProject = useCallback(
    ({item}) => (
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('UserScreenDetails', item)}>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.username}</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text>||||||||||||||||||||||||||||</Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={{backgroundColor: 'blue', height: height}}>
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
        />
      )}
    </SafeAreaView>
  );
}
