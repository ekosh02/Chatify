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
import {styles} from '../styles/AppBarAndList';

export function Com1(props) {
  const api = 'users';

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  

  const renderProject = useCallback(
    ({item}) => (
      <View style={styles.shell}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('UserScreenDetails', item)}>
          <Text style={styles.nameTextStyle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={{height: height}}>
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
    </SafeAreaView>
  );
}
