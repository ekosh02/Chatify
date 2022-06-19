import { View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getProject } from '../../func/getApi'

import Actions  from '../../styles/Actions'
import { styles } from '../../styles/AppBarAndList'
import chatList from './chatList'

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


