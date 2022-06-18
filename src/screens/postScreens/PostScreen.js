import {
  View,
  Dimensions,
} from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

import { getProject } from './../../func/getApi'

import Actions from './../../styles/Actions'
import { styles } from './../../styles/AppBarAndList'
import { chatList } from './chatList'

const { width, height } = Dimensions.get("screen")

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


