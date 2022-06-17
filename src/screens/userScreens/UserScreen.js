import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import { Indicator } from '../../styles/ActivityIndicator'
import { getProject } from '../../func/getApi'

import { Actions } from '../../styles/Actions'
import { styles } from '../../styles/AppBarAndList'
import { paramsForUser } from '../../func/paramsForUser'

export function UserScreen(props) {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const api = 'users'

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
  console.log('RENDER CHATLIST')

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
  </View>
}

const RenderProject = ({ item, props }) => {

  let params = paramsForUser(item)

  return (
    <View style={styles.shell}>
      <TouchableOpacity onPress={() =>
        props.navigation.navigate('UserScreenDetails', params)}>
        <Text style={styles.nameTextStyle}>{item.name}</Text>
        <Text style={styles.descriptionTextStyle}>{item.company.bs}</Text>
      </TouchableOpacity>
    </View>
  )
}


