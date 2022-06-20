import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions
  } from 'react-native';
  import React from 'react';
  import { Indicator } from './../../styles/ActivityIndicator';
  import { styles } from './../../styles/AppBarAndList';

  const { width } = Dimensions.get('screen');
  
  export function chatList(loading, data, props) {
  
    return (
    <View>
      {loading ? (
        <Indicator />
      ) : (
        <FlatList
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        data={data}
          renderItem={({ item, index }) => (
            <RenderProject item={item} />
          )}
          />
      )}
    </View>);
  }
  
  const RenderProject = ({index, item}) => {

    return (
      <View>
        <TouchableOpacity>
        <Image 
         source={{ uri: item.thumbnailUrl }}
          style={{
          width: width / 3,
          height: width / 3,
          borderRadius: 0,
          borderColor:'black',  
        }}
      />
        </TouchableOpacity>
      </View>
    );
  };
  