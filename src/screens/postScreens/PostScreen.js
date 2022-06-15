import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

import { Indicator } from './../../styles/ActivityIndicator'
import { getProject } from './../../func/getApi'

import { Actions } from './../../styles/Actions'
import { styles } from './../../styles/AppBarAndList'

const { width, height } = Dimensions.get("screen")

export function PostScreen(props) {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const [width, setWidth] = useState(100)
  const [state, setState] = useState(true)
  const [height, setHeight] = useState(100)

  const api = 'posts'

  // const calculate = useMemo(() => {
  //   console.log("calling calculate")
  //   return width*height
  // }, [width, height])

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

  let params = {
    title: item.title,
    body: item.body,
    userId: item.userId,
    id: item.id
  }

  return (
    <View style={styles.shell}>
      <TouchableOpacity onPress={() => props.navigation.navigate('PostScreenDetails', params)}>
        <Text style={styles.nameTextStyle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.descriptionTextStyle} numberOfLines={1}>{item.body}</Text>
      </TouchableOpacity>
    </View>
  )
}





