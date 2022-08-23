import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {getProject} from '../../func/getApi';
import Indicator from '../../styles/ActivityIndicator';
import { styles } from '../../styles/AppBarAndList';
import {DetailsAppBar} from '../../styles/DetailsAppBar';

const {width} = Dimensions.get('screen');

export function AlbumScreenDetails(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const item = props.route.params;
  const api = 'users/' + item.userId;

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <Indicator />
      ) : (
        <View>
          <DetailsAppBar data={data} />

          <TouchableOpacity>
            <PhotoList props={props} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

function PhotoList(props) {
  const userId = props.props.route.params.userId;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const api = 'albums/' + userId + '/photos'; // albums/1/photos

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  const renderProject = useCallback(({item}) => (
    <View>
      <TouchableOpacity>
        <Image
          source={{uri: item.thumbnailUrl}}
          style={{
            width: width / 3,
            height: width / 3,
            borderRadius: 0,
            borderColor: 'black',
          }}
        />
      </TouchableOpacity>
    </View>
  ));

  return (
    <View>
      {loading ? (
        <Indicator />
      ) : (
        <FlatList
          numColumns={3}
          data={data}
          renderItem={renderProject}
          maxToRenderPerBatch={9}
          initialNumToRender={20}
          contentContainerStyle={{paddingBottom: 210}}
          
        />
      )}
    </View>
  );
}
